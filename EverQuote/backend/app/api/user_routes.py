from flask import Blueprint, jsonify, request, make_response
from app.models import db, User, Note
from app.forms import SignUpForm
from werkzeug.datastructures import MultiDict

user_routes = Blueprint('users', __name__)

@user_routes.route('/', methods=["GET"])
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
    if User.query.filter(User.email == data["email"]).first() is None:
      newUser = User(username = data["username"], email = data["email"], password = data["password"] )
      db.session.add(newUser)
      db.session.commit()
      user_dict = newUser.to_dict()
      return { user_dict["id"]: user_dict }
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

@user_routes.route('/<int:user_id>/notes', methods=["GET"])
def get_user_notes(user_id):
  notes = [note.to_dict() for note in User.query.filter(User.id == user_id).first().notes]
  note_dict = dict()
  for note in notes:
      note_dict[note["id"]] = note
  return note_dict

@user_routes.route("/<int:user_id>/trash", methods=['DELETE'])
def delete_user_trash(user_id):
  Note.query.filter(Note.isTrash == True and Note.userId == user_id).delete()
  db.session.commit()

@user_routes.route("/<int:user_id>/trash", methods=["GET"])
def get_user_trash(user_id):
  trash_notes = [note.to_dict()["id"] for note in Note.query.filter(Note.isTrash == True, Note.userId == user_id).all()]
  return { "trash": trash_notes }
