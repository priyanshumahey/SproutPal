import json
import os
import sys
import boto3
import botocore
from os.path import join, dirname
from dotenv import load_dotenv
from utils import bedrock, print_ww

from langchain.llms.bedrock import Bedrock
from langchain.prompts import PromptTemplate

import config

boto3_bedrock = config.init()
# textgen_llm = config.get_llm(boto3_bedrock)

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


# Create a prompt template that has multiple input variables
multi_var_prompt = PromptTemplate(
    input_variables=["json", "csv"], 
    template="""Given USER give the name of a person listed in QUERY who best matches the USER.
    USER:{json}
    QUERY:{csv}"""
)

with open('./data/user.example.json', 'r') as file:
    json_data = json.load(file)

with open('./data/Form_Questions_Responses_-_Copy_of_Form_responses_1.csv', 'r') as file:
    csv_string = file.read()

# Pass in values to the input variables
prompt = multi_var_prompt.format(json=json_data, 
                                 csv=csv_string
     )

num_tokens = textgen_llm.get_num_tokens(prompt)
print(f"Our prompt has {num_tokens} tokens")

response = textgen_llm(prompt)

email = response[response.index('\n')+1:]

print_ww(email)