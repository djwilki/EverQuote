from flask import Blueprint, request
from app.models import db, Notebook
from datetime import datetime

notebooks = Blueprint("notebooks", __name__)

@notebooks.route("/", methods=["POST"])
def new_notebook():
    data = request.json
    notebook = Notebook(title=data['title'], userId=data['userId'], isDefault=data['isDefault'])
    db.session.add(notebook)
    db.session.commit()
    return notebook.to_dict()

@notebooks.route("/", methods=["PUT"])
def edit_notebook():
    data = request.json
    notebook = Notebook.query.get(data['notebookId'])
    notebook.title = data['title']
    notebook.updated_at = datetime.now
    db.session.commit()
    return notebook.to_dict()

@notebooks.route("/<int:notebook_id>")
def get_notebook():
    notebook = Notebook.query
    db.session.add(notebook)
    db.session.commit()
    return notebook.to_dict()