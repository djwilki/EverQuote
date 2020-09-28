import React from "react"
import {NavLink, Redirect} from 'react-router-dom'

class SignUpPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: ''
        };
        this.updateUsername = this.updateField('username');
        this.updateEmail = this.updateField('email');
        this.updatePassword = this.updateField('password');
    };

    submitHandler = async (e) => {
        e.preventDefault();
        const { username, email, password } = this.state;
        // store fetch post
        // login
        // redirect to homepage, either by login or here
    }

    updateField(name) {
        return (e) => {
            this.setState({ [name]: e.target.value});
        }
    }


    render() {
        const {
            username,
            email,
            password
        } = this.state;

        return (
            <>
                <div>
                    <img/>
                    <h1></h1>
                    <h2></h2>
                    <NavLink to="/login">Continue with Demo User</NavLink>
                    <form onSubmit={this.submitHandler}>
                        <input name="username" type="text" value={username} onChange={this.updateUsername} placeholder='Username'/>
                        <input name="email" type="text" value={email} onChange={this.updateEmail} placeholder='Email'/>
                        <input name="password" type="text" value={password} onChange={this.updatePassword} placeholder='Password'/>
                        <button type="submit">Continue</button>
                    </form>
                    <NavLink to="/login">Sign in</NavLink>
                </div>
            </>
        )
    }
}

const m