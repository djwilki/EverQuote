import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { login } from '../store/auth';

const LoginForm = ({ history }) => {
    const [emailOrUsername, setEmailOrUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        setErrors([]);
    }, [emailOrUsername, password]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const res = await dispatch(login(emailOrUsername, password))

        if (res.ok) {
            history.replace('/');
            return;
        }

        setErrors(res.data.errors);
    }

    const onEmailOrUsernameChange = (event) => {
        setEmailOrUsername(event.target.value);
    }

    const onPasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const demoUserClick = async (event) => {
        event.preventDefault();

        const res = await dispatch(login("demo@demo.com", "password"))

        if (res.ok) {
            history.replace('/');
            return;
        }

        setErrors(res.data.errors);
    }

    return (
        <div>
            <div className="login_top_container">
                <img alt="logo" src='https://www.iconfinder.com/data/icons/logos-and-brands/512/118_Evernote_logo_logos-512.png' style={{ width: "6%" }} />
                <h1>EverQuote</h1>
                <h4>Quote anything important</h4>
                <button onClick={demoUserClick}>Continue with Demo User</button>
            </div>
            <div className="login_form_container">
                <div className="login_form_error_container">
                    { errors.length ?
                    <ul>
                        {errors.map((error, i) => <li key={`error-${i + 1}`}>{error}</li>)}
                    </ul>
                    : <></>}
                </div>
                <form method="" action="" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email_or_username">Email</label>
                        <input type="text" name="email_or_username" value={emailOrUsername} className="login_email_or_username" onChange={onEmailOrUsernameChange} />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" value={password} className="login_password" onChange={onPasswordChange} />
                    </div>
                    <button type="submit">Sign In</button>
                </form>
            </div>
        </div>
    )
}

export default withRouter(LoginForm);