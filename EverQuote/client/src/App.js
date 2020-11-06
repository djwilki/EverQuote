import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'
import {setSelectedNotebook, setActiveNote, loadSession} from './store/session'
import UserList from './components/UsersList';
import SignUpPage from './components/SignUp'
import LoginForm from './components/LoginForm';
import AuthRoute from './components/AuthRoute';
import Home from './components/Home';


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

    const dispatch = useDispatch()
    const userId = useSelector(state => state.session.user_id)

    useEffect(() => {
        const load = async () => {
            const selectedNotebook = await localStorage.getItem('selectedNotebook')
            await dispatch(setSelectedNotebook(Number(selectedNotebook)))
            const activeNote = await localStorage.getItem('activeNote')
            await dispatch(setActiveNote(Number(activeNote)))
            await dispatch(loadSession());
        }
        load()
    }, [dispatch])


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
