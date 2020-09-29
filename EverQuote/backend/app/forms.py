from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField
from wtforms.validators import InputRequired, Length


class LoginForm(FlaskForm):
    email_or_username = StringField("Email", validators=[InputRequired("Please provide a valid email or username.")])
    password = PasswordField("Password", validators=[InputRequired("Please provide a valid password.")])