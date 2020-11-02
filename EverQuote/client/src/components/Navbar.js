import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import NewNoteButton from './NewNoteButton';
import UserModal from './UserModal';
import UserModalButton from './UserModalButton';
import styles from '../styles/navbar.module.css';
import NotebookSelect from './NotebookSelect';
import { setNoteList } from '../store/session';

function Navbar({ history }) {
    const dispatch = useDispatch();
    const notebooks = useSelector(state => Object.values(state.entities.notebooks));
    const userModal = useSelector(state => state.ui.userModal);
    const user = useSelector(state => state.entities.users[state.session.user_id]);

    const handleAllNotesClick = (e) => {
        e.preventDefault();
        dispatch(setNoteList("notebook", null, true));
    }

    return (
        <nav className={styles.sidebar_nav}>
            <UserModalButton user={user}/>
            { userModal ? <UserModal /> : <></>}
            <NewNoteButton />
            <ul className={styles.navlinks}>
                <li onClick={handleAllNotesClick}><NavLink to="/notes" activeclass="active">All Notes</NavLink></li>
                <li><NavLink to="/notebooks" activeclass="active">Notebooks</NavLink></li>
                {notebooks && notebooks.length ?
                notebooks.map((notebook, i) => <NotebookSelect notebook={notebook} key={`notebook-${i + 1}`}/>)
            : <></>}
            </ul>
            <ul className={styles.extra_navlinks}>
                <li><NavLink to="/users" activeclass="active">Users</NavLink></li>
                <li><NavLink to="/signup" activeclass="active">Sign up</NavLink></li>
            </ul>
        </nav>
    );
}
export default withRouter(Navbar);
