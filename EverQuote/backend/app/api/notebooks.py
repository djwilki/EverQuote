from flask import Blueprint, request
from app.models import db, Notebook

notes = Blueprint("notebooks", __name__)

@notes.route("/", methods=["POST"])
def new_notebook():
    data = request.json
    notebook = Notebook(title=data['title'], userId=data['userId'], isDefault=data['isDefault'])
    db.session.add(notebook)
    db.session.commit()
    return notebook.to_dict()

@notes.route("/<int:notebook_id>")
def get_notebook():
    data = request.json
    notebook = Notebook(title=data['title'], userId=data['userId'], isDefault=data['isDefault'])
    db.session.add(notebook)
    db.session.commit()
    return notebook.to_dict()