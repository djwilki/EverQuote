import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import { logout } from '../store/session';
import NewNoteButton from './NewNoteButton';
import styles from '../styles/navbar.module.css';
import UserModal from './UserModal';
import { toggleUserModal } from '../store/ui';


function Navbar({ history }) {
    const dispatch = useDispatch();
    const notebooks = useSelector(state => state.entities.notebooks);
    const userModal = useSelector(state => state.ui.userModal);

    const handleModalClick = (e) => {
        dispatch(toggleUserModal());
    }

    const select_notebooks = Object.values(notebooks).map(ele => {
        return (
            <>
                <button>{ele.title}</button>
            </>
        )
    });

    return (
        <nav className={styles.sidebar_nav}>
            <button className={styles.usernameDropDown} onClick={handleModalClick} id="toggleUserModal">demo ▼</button>
            { userModal ? <UserModal /> : <></>}
            <NewNoteButton />
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