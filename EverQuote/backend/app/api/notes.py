import requests
from flask import Blueprint, request
from app.models import db, Note, Notebook
from datetime import datetime

notes = Blueprint("notes", __name__)

@notes.route("", methods=["POST"])
def new_note():
    data = request.json
    note_content = requests.get('https://api.quotable.io/random').json()
    note = Note(content=note_content["content"], title=f"{note_content['author']} said...", userId=data['userId'], notebookId=data['notebookId'])
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


@notes.route("/", methods=['PUT'])
def delete_note():
    data = request.json
    note = Note.query.filter(Note.id == data).first()
    if not note.isTrash:
        note.isTrash = True
        note.notebookId = None
        db.session.commit()
    return {'message': 'Note is trash'}


@notes.route('/', methods=['DELETE'])
def empty_trash():
    data = request.json
    print('INSIDE EMPTY TRASH')
    print(data)
    for noteId in data:
        note = Note.query.filter(Note.id == noteId).first()
        db.session.delete(note)
    db.session.commit()
    return {'message': 'Trash taken out'}


@notes.route('/<int:note_id>/move_to/<int:notebook_id>', methods=['PUT'])
def move_note(note_id, notebook_id):
    note = Note.query.get(note_id)
    note.notebookId = notebook_id
    db.session.commit()
    return note.to_dict()
