import json
import os
import sys
import boto3
import botocore
from os.path import join, dirname
from dotenv import load_dotenv
from utils import bedrock, print_ww
import ast

import config, inference

boto3_bedrock = config.init()
textgen_llm = config.get_llm(boto3_bedrock)

with open('./data/user.example.json', 'r') as file:
    user = json.load(file)
with open('./data/Form_Questions_Responses_-_Copy_of_Form_responses_1.csv', 'r') as file:
    friends = file.read()

# this will return json of top_k list, and summary of the top match
def do_inference(user, friends, k):
    # res = inference.bestMatchAndSummary(textgen_llm, user, friends)
    top_k = inference.getTopK(textgen_llm, user, friends, k=k)

    # convert to list
    top_k = ast.literal_eval(top_k)

    summary = inference.matchSummary(textgen_llm, user, top_k[0])

    data = {
        "top_k": top_k,
        "summary": summary
    }
    return data

res = do_inference(user, friends, 5)
print(res)
