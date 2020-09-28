import React from "react"
import {NavLink, Redirect} from 'react-router-dom'
import {connect} from 'react-redux';
import signup from "../store/signup";
import login from "../store/auth";

export class SignUpPage extends React.Component {
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
        const res = await this.props.signup(username, email, password);
        await this.props.login(res.data.username, password);
        return <Redirect to="/" />
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

const mapStateToProps = ({auth}) => {
    return {
        loggedIn: !!auth.id
    };
};

const mapDispatchToProps = (dispatch) => ({
    signup: (username, email, password) => dispatch(signup(username, email, password)),
    login: (username, password) => dispatch(login(username, password))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignUpPage);