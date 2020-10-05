import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import { logout } from '../store/session';
import NewNoteButton from './NewNoteButton';
import styles from '../styles/navbar.module.css';
import UserModal from './UserModal';
import { toggleUserModal } from '../store/ui';
import { setSelectedNotebook } from '../store/session';



function Navbar({ history }) {
    const dispatch = useDispatch();
    const notebooks = useSelector(state => state.entities.notebooks);
    const userModal = useSelector(state => state.ui.userModal);
    const users = useSelector(state => state.entities.users);

    const handleModalClick = (e) => {
        dispatch(toggleUserModal());
    }

    const handleSelect = (e) => {
        e.preventDefault();
        console.log(e.target.value)
        dispatch(setSelectedNotebook(Number(e.target.value)))
        history.replace('/notes');
        return;
    }

    const getUsername = Object.values(users).map(user => {
        return user.username;
    })

    const select_notebooks = Object.values(notebooks).map(ele => {
        return (
            <li key={ele.id}>
                <button value={ele.id} onClick={handleSelect}>{ele.title}</button>
            </li>
        )
    });

    return (
        <nav className={styles.sidebar_nav}>
            <button className={styles.usernameDropDown} onClick={handleModalClick} id="toggleUserModal">{getUsername} ▼</button>
            { userModal ? <UserModal /> : <></>}
            <NewNoteButton />
            <ul className={styles.navlinks}>
                <li><NavLink to="/notes" activeclass="active">All Notes</NavLink></li>
                <li><NavLink to="/notebooks" activeclass="active">Notebooks</NavLink></li>
                {select_notebooks}
            </ul>
            <ul className={styles.extra_navlinks}>
                <li><NavLink to="/users" activeclass="active">Users</NavLink></li>
                <li><NavLink to="/signup" activeclass="active">Sign up</NavLink></li>
            </ul>
        </nav>
    );
}
export default withRouter(Navbar);