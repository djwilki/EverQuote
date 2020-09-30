from flask import Blueprint

notes = Blueprint("notes", __name__)

@notes.route('/', methods=["POST"])
def new_note():
    pass