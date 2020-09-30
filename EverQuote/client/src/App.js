import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';

import UserList from './components/UsersList';
import SignUpPage from './components/SignUp'
import LoginForm from './components/LoginForm';
import AuthRoute from './components/AuthRoute';
import Home from './components/Home';
import Notes from './components/Notes';


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
            <Switch>
                <Route exact path="/users">
                    <UserList />
                </Route>
                <Route exact path="/login">
                    <LoginForm />
                </Route>
                <Route exact path="/signup">
                    <SignUpPage />
                </Route>
                <AuthRoute path="/" component={Home} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
