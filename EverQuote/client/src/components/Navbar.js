import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import { logout } from '../store/auth';
import styles from '../styles/navbar.module.css';


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
        <nav className={styles.sidebar_nav}>
            <button className={styles.usernameDropDown} onClick={handleLogout}>demo ▼</button>
            <button className={styles.newNoteBtn}>New Note</button>
            <ul className={styles.navlinks}>
                <li><NavLink to="/notes" activeclass="active">All Notes</NavLink></li>
                <li><NavLink to="/notebooks" activeclass="active">Notebooks</NavLink></li>
            </ul>
            <ul className={styles.extra_navlinks}>
                <li><NavLink to="/users" activeclass="active">Users</NavLink></li>
                <li><NavLink to="/signup" activeclass="active">Sign up</NavLink></li>
            </ul>
        </nav>
    );
}
export default withRouter(Navbar);