import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../store/auth';

const LoginForm = () => {
    const [emailOrUsername, setEmailOrUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const dispatch = useDispatch();

    const handleSubmit = async (event) => {
        event.preventDefault();

        const res = await dispatch(login(emailOrUsername, password))

        if (res.ok) {
            return;
        }
    }

    const onEmailOrUsernameChange = (event) => {
        setEmailOrUsername(event.target.value);
    }

    const onPasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const demoUserClick = async (event) => {
        // placeholder
    }

    return (
        <div>
            <div className="login_top_container">
                <img alt="logo" src='https://www.iconfinder.com/data/icons/logos-and-brands/512/118_Evernote_logo_logos-512.png' style={{ width: "6%" }} />
                <h1>EverQuote</h1>
                <h4>Quote anything important</h4>
                <button>Continue with Demo User</button>
            </div>
            <div className="login_form_container">
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

export default LoginForm;