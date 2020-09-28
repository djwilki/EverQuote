from flask import Blueprint, request
from app.auth import login_manager


session = Blueprint("session", __name__)

@session.route("/login", methods=["POST"])
def login():
    json = request.get_json()
    print(json)
    return {"Success": "success"}