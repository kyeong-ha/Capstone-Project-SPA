/* eslint-disable no-undef */
/* Amplify Params - DO NOT EDIT
	API_MYMBTI_GRAPHQLAPIENDPOINTOUTPUT
	API_MYMBTI_GRAPHQLAPIIDOUTPUT
	API_MYMBTI_GRAPHQLAPIKEYOUTPUT
	API_MYMBTI_INPUTTABLE_ARN
	API_MYMBTI_INPUTTABLE_NAME
	API_MYMBTI_MBTITABLE_ARN
	API_MYMBTI_MBTITABLE_NAME
	AUTH_MYAUTH_USERPOOLID
	ENV
	REGION
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

const AWS = require('aws-sdk');

AWS.config.update({
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
    region: 'ap-northeast-2',
});

const docClient = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
    let params = {
        TableName: 'MBTI-ctmepefwojhwlf2mhhohuiu6rq-dev',
        KeyConditionExpression: '#key = :value',
        ExpressionAttributeNames: { '#key': 'id' },
        ExpressionAttributeValues: { ':value': event.arguments.mbti },
        // FilterExpression: 'contains (mbti, :mbtiValue)',
    };
    try {
        const data = await docClient.query(params).promise()
        return data.Items[0];
    } catch (err) {
        console.error(err);
    }
};
