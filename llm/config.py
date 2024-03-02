import json
import os
import sys
import boto3
import botocore
from os.path import join, dirname
from dotenv import load_dotenv
from utils import bedrock

def init():
    load_dotenv()

    config = {
        os.environ["AWS_DEFAULT_REGION"],
        os.environ.get("AWS_PROFILE", None),
        os.environ.get("BEDROCK_ASSUME_ROLE", None)
    }

    boto3_bedrock = bedrock.get_bedrock_client(
        assumed_role=os.environ.get("BEDROCK_ASSUME_ROLE", None),
        region=os.environ.get("AWS_DEFAULT_REGION", None),
        runtime=True
    )

    return boto3_bedrock

def get_llm(boto3_bedrock):
    inference_modifier = {'max_tokens_to_sample':4096, 
                      "temperature":0.5,
                      "top_k":250,
                      "top_p":1,
                      "stop_sequences": ["\n\nHuman"]
                     }

    textgen_llm = Bedrock(model_id = "anthropic.claude-v2",
                        client = boto3_bedrock, 
                        model_kwargs = inference_modifier 
                        )
    
    return textgen_llm