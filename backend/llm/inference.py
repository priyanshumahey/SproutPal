from langchain.prompts import PromptTemplate

def getTopK(textgen_llm, user, friends, k=5):
    # Create a prompt template that has multiple input variables
    multi_var_prompt = PromptTemplate(
    input_variables=["user", "friends"], 
    template="""Given the user data, rank the top 5 friends based on similarity. ONLY RETURN A LIST OF NAMES. NO OTHER TEXT.
    user:{user}
    friends:{friends}

    Example output:
    ["John", "Sarah", "Beatrice", "Bob", "Joe"]
    """
    )

    # Pass in values to the input variables
    prompt = multi_var_prompt.format(user=user, 
                                    friends=friends)

    num_tokens = textgen_llm.get_num_tokens(prompt)
    print(f"Our prompt has {num_tokens} tokens")

    response = textgen_llm(prompt)

    return response[response.index('\n')+1:]

def matchSummary(textgen_llm, user, match):
    # Create a prompt template that has multiple input variables
    multi_var_prompt = PromptTemplate(
    input_variables=["user", "match"], 
    template="""Give a friendly summary using the users name and their matched friend.
    user:{user}
    match:{match}
    """
    )

    # Pass in values to the input variables
    prompt = multi_var_prompt.format(user=user, 
                                    match=match)

    num_tokens = textgen_llm.get_num_tokens(prompt)
    print(f"Our prompt has {num_tokens} tokens")

    response = textgen_llm(prompt)

    return response

def bestMatchAndSummary(textgen_llm, user, friends):
    # Create a prompt template that has multiple input variables
    multi_var_prompt = PromptTemplate(
    input_variables=["user", "friends"], 
    template="""Given the user data, find the friend who best matches the user's profile. Give a friendly summary using the users name and their best match.
    user:{user}
    friends:{friends}
    """
    )

    # Pass in values to the input variables
    prompt = multi_var_prompt.format(user=user, 
                                    friends=friends)

    num_tokens = textgen_llm.get_num_tokens(prompt)
    print(f"Our prompt has {num_tokens} tokens")

    response = textgen_llm(prompt)

    return response[response.index('\n')+1:]