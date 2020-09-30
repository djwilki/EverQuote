import React from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Switch, Route, NavLink, withRouter } from 'react-router-dom';
import { logout } from '../store/auth';
import '../styles/navbar.css';


function Navbar({ history }) {
    const dispatch = useDispatch();

    const handleLogout = async (e) => {
        e.preventDefault();
        const res = await dispatch(logout());
        if (res.ok) {
            history.replace("/login")
        }
        return;
    } 

    return (
        <nav className='sidebar-nav'>
            <button className='usernameDropDown' onClick={handleLogout}>demo ▼</button>
            <button className='newNoteBtn'>New Note</button>
            <ul className='navlinks'>
                <li><NavLink to="/notes" activeclass="active">All Notes</NavLink></li>
                <li><NavLink to="/notebooks" activeclass="active">Notebooks</NavLink></li>
            </ul>
            <ul className='extra-navlinks'>
                <li><NavLink to="/users" activeclass="active">Users</NavLink></li>
                <li><NavLink to="/signup" activeclass="active">Sign up</NavLink></li>
            </ul>
        </nav>
    );
}
export default withRouter(Navbar);