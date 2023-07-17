# Pull the base image with python 3.8 as a runtime for your Lambda
FROM public.ecr.aws/lambda/python:3.8

# Copy the earlier created requirements.txt file to the container
COPY requirements.txt ./

# Install the python requirements from requirements.txt
RUN python3.8 -m pip install -r requirements.txt 
RUN pip install torch==2.0.0+cpu -f https://download.pytorch.org/whl/torch_stable.html
# Copy the earlier created app.py file to the container
COPY app.py ./
COPY ./src_xgboost/* ./src_xgboost
COPY ./classifiers/ei_classifier.sav ./classifiers/
COPY ./classifiers/ns_classifier.sav ./classifiers/
COPY ./classifiers/pj_classifier.sav ./classifiers/
COPY ./classifiers/tf_classifier.sav ./classifiers/

# Set the CMD to your handler
CMD ["app.lambda_handler"]