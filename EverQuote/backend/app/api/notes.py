from flask import Blueprint, request
from app.models import db, Note

notes = Blueprint("notes", __name__)

@notes.route("", methods=["POST"])
def new_note():
    data = request.json
    note = Note(content="", userId=data['userId'], notebookId=data['notebookId'])
    db.session.add(note)
    db.session.commit()
    return note.to_dict()