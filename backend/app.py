from flask import Flask, jsonify, json, request
import json
import os

import llm.main as main

app = Flask(__name__)

current_directory = os.path.dirname(os.path.abspath(__file__))
data_path = os.path.join(current_directory, 'data')
user_file = os.path.join(data_path, 'user.json')
friends_file = os.path.join(data_path, 'friends.csv')

@app.route('/', methods=['GET'])
def index():
    return jsonify('Hello World!')

@app.route('/postUser', methods=['POST'])
def postUser():
    data = request.get_json()
    if os.path.exists(user_file):
        os.remove(user_file)
    with open(user_file, 'w') as file:
        json.dump(data, file)
    return jsonify(data)

@app.route('/getLLM', methods=['GET'])
def getLLM():
    with open(user_file, 'r') as file:
        user = json.load(file)
    with open(friends_file, 'r') as file:
        friends = file.read()
    data = main.do_inference(user, friends, 5)
    return jsonify(data)

if __name__ == '__main__':
    app.run(port=5328)