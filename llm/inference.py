from langchain.prompts import PromptTemplate

def bestMatch(textgen_llm, user, friends):
    # Create a prompt template that has multiple input variables
    multi_var_prompt = PromptTemplate(
    input_variables=["user", "friends"], 
    template="""Given the user data give the name of a person listed in friends who best matches the user.
    user:{user}
    friends:{friends}"""
)

    # Pass in values to the input variables
    prompt = multi_var_prompt.format(user=user, 
                                    friends=friends)

    num_tokens = textgen_llm.get_num_tokens(prompt)
    print(f"Our prompt has {num_tokens} tokens")

    response = textgen_llm(prompt)

    return response[response.index('\n')+1:]