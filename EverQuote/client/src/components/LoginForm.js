import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { login } from '../store/auth';
import '../styles/auth.css';

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

        const res = await dispatch(login("demo", "password"))

        if (res.ok) {
            history.replace('/');
            return;
        }

        setErrors(res.data.errors);
    }

    return (

        <div className="form-wrapper centered">
            <div className="form-container">
                <div className="form-header">
                    <img alt="logo" src='https://i.imgur.com/GOpcw1D.png' style={{ width: "30%" }} />
                    <h1 className="header-title">
                        EverQuote
                    </h1>
                    <div className="header-tagline">
                        Remember everything important.
                    </div>
                </div>
                <button onClick={demoUserClick} className="demo_button">Continue as Demo User</button>
                <div className="divider-container">
                    <div className="divider-text">or</div>
                    <div className="divider-line"></div>
                </div>
                <div className="login_form_container">

                    <form method="" action="" onSubmit={handleSubmit}>
                        <div>
                            <input placeholder="Email or Username" type="text" name="email_or_username" value={emailOrUsername} className="auth_input" onChange={onEmailOrUsernameChange} />
                        </div>

                        <div>
                            <input placeholder="Password" type="password" name="password" value={password} className="auth_input" onChange={onPasswordChange} />
                        </div>
                        <div className="login_form_error_container">
                            {errors.length ?
                                <ul className="auth_error_list">
                                    {errors.map((error, i) => <li className="error_message" key={`error-${i + 1}`}>{error}</li>)}
                                </ul>
                                : <></>}
                        </div>
                        <button type="submit" className="auth_button">Continue</button>
                    </form>
                </div>
                <div className="form-footer">
                    <div className="footer-tagline">
                        Don't have an account?
                    </div>
                    <div className="footer-cta-wrapper">
                        <Link className="footer-cta" to='/signup'>Create account</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(LoginForm);