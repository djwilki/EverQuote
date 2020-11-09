from flask import Blueprint, request, make_response
from app.models import db, Notebook, Note
from datetime import datetime
from sqlalchemy import null

notebooks = Blueprint("notebooks", __name__)

@notebooks.route("/", methods=["POST"])
def new_notebook():
    data = request.json
    notebook = Notebook(title=data['title'], userId=data['userId'], isDefault=data['isDefault'])
    db.session.add(notebook)
    db.session.commit()
    return notebook.to_dict()

@notebooks.route("/<int:notebook_id>", methods=["PUT"])
def edit_notebook(notebook_id):
    data = request.json
    notebook = Notebook.query.get(notebook_id)
    notebook.title = data['title']
    notebook.updated_at = datetime.now()
    db.session.commit()
    return notebook.to_dict()

@notebooks.route("/<int:notebook_id>/update", methods=["PUT"])
def update_notebook(notebook_id):
    notebook = Notebook.query.get(notebook_id)
    notebook.updated_at = datetime.now()
    db.session.commit()
    return notebook.to_dict()

@notebooks.route("/<int:notebook_id>", methods=["DELETE"])
def delete_notebook(notebook_id):
    notes = Note.query.filter(Note.notebookId == notebook_id).all()
    for note in notes:
        if not note.isTrash or note.notebookId is not None:
            note.isTrash = True
            note.notebookId = null()
            db.session.commit()
    notebook = Notebook.query.get(notebook_id)
    db.session.delete(notebook)
    db.session.commit()
    res = make_response({ "message": "notebook successfully deleted" }, 200)
    return res


@notebooks.route("/<int:notebook_id>")
def get_notebook():
    notebook = Notebook.query
    db.session.add(notebook)
    db.session.commit()
    return notebook.to_dict()
