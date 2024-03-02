from flask import Flask, jsonify, json, request
import json
import os

app = Flask(__name__)

@app.route('/', methods=['GET'])
def index():
    return jsonify('Hello World!')

@app.route('/postUser', methods=['POST'])
def postUser():
    data = request.get_json()
    if os.path.exists('user.json'):
        os.remove('user.json')
    with open('user.json', 'w') as file:
        json.dump(data, file)
    return jsonify(data)

if __name__ == '__main__':
    app.run(port=5328)