import json
import boto3

import numpy as np

import torch
from torch import nn
from torch.optim import Adam
from transformers import (
    T5Tokenizer,
    T5Model,
)
from transformers.models.t5.modeling_t5 import *
from tqdm import tqdm
from src_xgboost import xgboost_model

import pickle
import xgboost as xgb
import sys

client = boto3.client('dynamodb')

def lambda_handler(event, context):
    input_answers = []
    for i in range(0, 10):
        answer = client.query(
            TableName='Input-ctmepefwojhwlf2mhhohuiu6rq-dev',
            KeyConditionExpression='#name = :value',
            ExpressionAttributeValues={
                ':value': {
                    'S': str(i)
                }
            },
            ExpressionAttributeNames={
                '#name': 'id'
            })['Items'][0]['answer']['S']
        input_answers.append(answer)
    
    classifier_pred = {}

    tokenizer = T5Tokenizer.from_pretrained("t5-base")
    feature_data = tokenizer(
        input_answers,
        return_tensors="pt",
        padding=True,
        truncation=True,
    )
    t5 = T5Model.from_pretrained("t5-base")
    model = xgboost_model.MBTIClassifierT5(t5.config)
    model.load_t5(t5.state_dict())

    features = []

    model.eval()
    with torch.no_grad():
        outputs = model(
            input_ids=feature_data["input_ids"].unsqueeze(0),
            attention_mask=feature_data["attention_mask"].unsqueeze(0),
            decoder_input_ids=torch.tensor([[0]]),
        )
        outputs = outputs.last_hidden_state[:, 0, :].numpy()
        features.extend(outputs)

    test_features = np.vstack(features)

    ######## prediciton ########
    # load the saved model from a file
    ei_model = pickle.load(open("classifiers/ei_classifier.sav", "rb"))
    ns_model = pickle.load(open("classifiers/ns_classifier.sav", "rb"))
    tf_model = pickle.load(open("classifiers/tf_classifier.sav", "rb"))
    pj_model = pickle.load(open("classifiers/pj_classifier.sav", "rb"))

    # make predictions using the loaded model
    ei_pred = ei_model.predict(test_features)  # e=0, i=1
    ns_pred = ns_model.predict(test_features)  # n=0, s=1
    tf_pred = tf_model.predict(test_features)  # t=0, f=1
    pj_pred = pj_model.predict(test_features)  # p=0, j=1

    # List of classifiers
    classifiers = [ei_model, ns_model, tf_model, pj_model]
    classifier_names = ["EI", "NS", "TF", "PJ"]

    # Predict using each classifier and display confidence
    for classifier, classifier_name in zip(classifiers, classifier_names):
        pred_prob = classifier.predict_proba(test_features)
        pred_label = classifier.predict(test_features)

        # Display confidence for each prediction
        for pred, prob in zip(pred_label, pred_prob):
            confidence = prob[pred] * 100
            classifier_pred[classifier_name] = prob[pred] * 100

    pred = str(ei_pred[0]) + str(ns_pred[0]) + str(tf_pred[0]) + str(pj_pred[0])
    mbti_dict = {
        "0000": "ENTP",
        "0001": "ENTJ",
        "0010": "ENFP",
        "0011": "ENFJ",
        "0100": "ESTP",
        "0101": "ESTJ",
        "0110": "ESFP",
        "0111": "ESFJ",
        "1000": "INTP",
        "1001": "INTJ",
        "1010": "INFP",
        "1011": "INFJ",
        "1100": "ISTP",
        "1101": "ISTJ",
        "1110": "ISFP",
        "1111": "ISFJ",
    }
    
    classifier_pred['mbti'] = mbti_dict[pred]
    
    return {
        'statusCode': str(200),
        'body': json.dumps(classifier_pred),
        'headers': {
            'Access-Control-Allow-Origin': '*'
        }
    }