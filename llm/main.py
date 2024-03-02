import json
import os
import sys
import boto3
import botocore
from os.path import join, dirname
from dotenv import load_dotenv
from utils import bedrock, print_ww


import config, inference

boto3_bedrock = config.init()
textgen_llm = config.get_llm(boto3_bedrock)

with open('./data/user.example.json', 'r') as file:
    user = json.load(file)
with open('./data/Form_Questions_Responses_-_Copy_of_Form_responses_1.csv', 'r') as file:
    others = file.read()

res = inference.bestMatch(textgen_llm, user, others)

print_ww(res)

