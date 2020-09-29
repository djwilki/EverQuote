import React, { useState } from "react"
import { NavLink, Redirect } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { signup }  from "../store/users.js";
import { login } from "../store/auth.js";


export default function SignUpPage() {

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const submitHandler = async (e) => {
        e.preventDefault();
        const res = await dispatch(signup(username, email, password));
        if (res.ok) {
            await dispatch(login(username, password));
            return <Redirect to="/" />
        }
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
                    <input name="password" type="text" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
                    <button type="submit">Continue</button>
                </form>
                <NavLink to="/login">Sign in</NavLink>
            </div>
        </>
    )
}
