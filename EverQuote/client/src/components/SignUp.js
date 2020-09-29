import React, { useState, useEffect } from "react"
import { NavLink, Redirect, Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { signup } from "../store/users.js";
import { login } from "../store/auth.js";
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
                <div class="divider-container">
                    <div class="divider-text">or</div>
                    <div class="divider-line"></div>
                </div>
                <div className="login_form_container">

                    <form onSubmit={submitHandler}>
                        <input name="username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="auth_input" placeholder='Username' />
                        <input name="email" type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="auth_input" placeholder='Email' />
                        <input name="password" type="text" value={password} onChange={(e) => setPassword(e.target.value)} className="auth_input" placeholder='Password' />
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
    )

    // return (
    //     <>
    //         <div>
    //             <img />
    //             <h1></h1>
    //             <h2></h2>
    //             <NavLink to="/login">Continue with Demo User</NavLink>
    //             <form onSubmit={submitHandler}>
    //                 <input name="username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Username' />
    //                 <input name="email" type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
    //                 <div className="login_form_error_container">
    //                     {errors.length ?
    //                         <ul className="">
    //                             {errors.map((error, i) => <li key={`error-${i + 1}`}>{error}</li>)}
    //                         </ul>
    //                         : <></>}
    //                 </div>
    //                 <input name="password" type="text" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
    //                 <button type="submit">Continue</button>
    //             </form>
    //             <NavLink to="/login">Sign in</NavLink>
    //         </div>
    //     </>
    // )
}

export default withRouter(SignUpPage)
