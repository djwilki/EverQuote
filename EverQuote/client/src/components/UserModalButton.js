import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleUserModal } from '../store/ui';
import styles from '../styles/navbar.module.css';

const UserModalButton = ({ user }) => {
    const dispatch = useDispatch();
    const handleModalClick = () => {
        dispatch(toggleUserModal());
    }

    return (
        <button className={styles.usernameDropDown} onClick={handleModalClick} id="toggleUserModal">{user ? user.username : ""} ▼</button>
    )
}

export default UserModalButton;