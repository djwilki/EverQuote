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

@notes.route("/<int:note_id>", methods=["PUT"])
def update_note(note_id):
    data = request.json
    note = Note.query.filter(Note.id == note_id).first()
    note.content = data['content']
    note.title = data["title"]
    db.session.commit()
    return note.to_dict()