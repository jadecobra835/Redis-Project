from flask import Flask, request, jsonify
from flask_redis import FlaskRedis
from flask_cors import CORS
import string
import random

app = Flask(__name__)

REDIS_URL = "redis://:password@localhost:6379/0"

r = FlaskRedis(app)

from app import r

CORS(app)

@app.route("/url/add", methods=["POST"])
def add_url():
    url = request.json.get("url")
    key = "".join([random.SystemRandom().choice(string.ascii_letters) for _ in range(20)])
    
    r.set(key, url)
    return jsonify(key)


@app.route("/url/get", methods=["GET"])
def get_urls():
    all_keys = r.keys('*http://localhost:3000*')
    return jsonify([key.decode("utf-8") for key in all_keys])


@app.route("/url/get-value", methods=["POST"])
def get_url():
    link = request.json.get("link")
    url = r.get(link)

    return jsonify(url)


if __name__ == "__main__":
    app.run(debug=True)