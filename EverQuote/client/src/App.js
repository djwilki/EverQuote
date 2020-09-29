import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';

import UserList from './components/UsersList';
import SignUpPage from './components/SignUp'
import LoginForm from './components/LoginForm';
import AuthRoute from './components/AuthRoute';


function App() {
    useEffect(() => {
        const getCSRF = async () => {
            const res = await fetch('/api/session/csrf');

            if (res.ok) {
                return;
            }
        }

        getCSRF();
    }, []);


    return (
        <BrowserRouter>
            <nav>
                <ul>
                    <li><NavLink to="/" activeclass="active">Home</NavLink></li>
                    <li><NavLink to="/users" activeclass="active">Users</NavLink></li>
                    <li><NavLink to="/signup" activeclass="active">Sign up</NavLink></li>
                </ul>
            </nav>
            <Switch>
                <Route path="/users">
                    <UserList />
                </Route>
                <Route path="/login">
                    <LoginForm />
                </Route>
                <Route path="/signup">
                    <SignUpPage />
                </Route>
                <AuthRoute path="/">
                    <h1>My Home Page</h1>
                </AuthRoute>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
