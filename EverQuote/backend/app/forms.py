from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField
from wtforms.validators import InputRequired


class LoginForm(FlaskForm):
    email_or_username = StringField("Email", validators=[InputRequired()])
    password = PasswordField("Password", validators=[InputRequired()])