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