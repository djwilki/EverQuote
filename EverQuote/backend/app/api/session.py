from flask import Blueprint, request
from json import JSONDecoder
from sqlalchemy import or_
from flask_login import login_user, current_user
from app.auth import login_manager
from app.models import User


session = Blueprint("session", __name__)

@session.route("/login", methods=["POST"])
def login():
    data = request.get_json()
    print(data)
    user = User.query.filter(or_(User.username == data['email_or_username'], User.email == data['email_or_username'])).first()
    if user and user.check_password(data['password']):
        login_user(user)
        return {"user": { "user_id": user.to_dict()['id'] } }
