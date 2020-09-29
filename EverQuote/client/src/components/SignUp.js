import React, { useState, useEffect } from "react"
import { NavLink, Redirect } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { signup } from "../store/users.js";
import { login } from "../store/auth.js";
import { withRouter } from 'react-router-dom'
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



    return (
        <>
            <div>
                <img />
                <h1></h1>
                <h2></h2>
                <NavLink to="/login">Continue with Demo User</NavLink>
                <form onSubmit={submitHandler}>
                    <input name="username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Username' />
                    <input name="email" type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
                    <div className="login_form_error_container">
                        {errors.length ?
                            <ul>
                                {errors.map((error, i) => <li key={`error-${i + 1}`}>{error}</li>)}
                            </ul>
                            : <></>}
                    </div>
                    <input name="password" type="text" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
                    <button type="submit">Continue</button>
                </form>
                <NavLink to="/login">Sign in</NavLink>
            </div>
        </>
    )
}

export default withRouter(SignUpPage)
