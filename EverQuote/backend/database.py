from dotenv import load_dotenv
load_dotenv()

from app import app, db
from app.models import User, Notebook

with app.app_context():
  db.drop_all()
  db.create_all()

  demo = User(username = 'demo', email = 'demo@demo.com', password='password')
  demo_user_default_notebook = Notebook(title = 'My Notebook', isDefault = True, userId = 1)

  db.session.add(demo)
  db.session.add(demo_user_default_notebook)

  db.session.commit()
