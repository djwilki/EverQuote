from flask import Blueprint, jsonify, request, make_response
from app.models import db, User
from app.forms import SignUpForm
from werkzeug.datastructures import MultiDict

user_routes = Blueprint('users', __name__)

@user_routes.route('/')
def index():
  response = User.query.all()
  return { "users": [user.to_dict() for user in response]}

@user_routes.route('/', methods=["POST"])
def new():
  data = MultiDict(mapping=request.json)
  print(data)
  form = SignUpForm(data)
  print(form.data)
  if form.validate():
    if not User.query.filter(User.email == data["email"]):
      newUser = User(username = data["username"], email = data["email"], password = data["password"] )
      db.session.add(newUser)
      db.session.commit()
    else:
      res = make_response({ "errors": ["A user with that email already exists"] }, 401)
      return res
  else:
    errorset = set()
    for error in form.errors:
      errorset.add(form.errors[error][0])
    errorlist = list(errorset)
    res = make_response({ "errors": errorlist}, 401)
    return res