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
    input_variables=["customerServiceManager", "customerName", "feedbackFromCustomer"], 
    template="""

Human: Create an apology email from the Service Manager {customerServiceManager} to {customerName} in response to the following feedback that was received from the customer: 
<customer_feedback>
{feedbackFromCustomer}
</customer_feedback>

Assistant:"""
)

# Pass in values to the input variables
prompt = multi_var_prompt.format(customerServiceManager="Bob", 
                                 customerName="John Doe", 
                                 feedbackFromCustomer="""Hello Bob,
     I am very disappointed with the recent experience I had when I called your customer support.
     I was expecting an immediate call back but it took three days for us to get a call back.
     The first suggestion to fix the problem was incorrect. Ultimately the problem was fixed after three days.
     We are very unhappy with the response provided and may consider taking our business elsewhere.
     """
     )

num_tokens = textgen_llm.get_num_tokens(prompt)
print(f"Our prompt has {num_tokens} tokens")

response = textgen_llm(prompt)

email = response[response.index('\n')+1:]

print_ww(email)