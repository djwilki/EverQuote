import React, { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { signup } from "../store/users.js";
import { login } from "../store/session.js";
import { withRouter } from 'react-router-dom';
import '../styles/auth.css';


const SignUpPage = ({ history }) => {

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);

    const dispatch = useDispatch();

    useEffect(() => {
        setErrors([]);
    }, [email, username, password]);

    const submitHandler = async (e) => {
        e.preventDefault();
        const res = await dispatch(signup(username, email, password));
        console.log("signup res", res)
        if (res.ok) {
            await dispatch(login(username, password));
            history.replace("/")
            return;
        }

        setErrors(res.data.errors);
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

                    <form onSubmit={submitHandler}>
                        <input name="username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="auth_input" placeholder='Username' />
                        <input name="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="auth_input" placeholder='Email' />
                        <input name="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="auth_input" placeholder='Password' />
                        <div className="login_form_error_container" >
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
                        Already have an account?
                    </div>
                    <div className="footer-cta-wrapper">
                        <Link className="footer-cta" to='/login'>Sign in</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default withRouter(SignUpPage)
