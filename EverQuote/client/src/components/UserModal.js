import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../store/session';
import { toggleUserModal } from '../store/ui';
import { withRouter } from 'react-router-dom';

const UserModal = ({ history }) => {
    const dispatch = useDispatch();
    const handleLogout = async (e) => {
        e.preventDefault();
        const res = await dispatch(logout());
        await dispatch(toggleUserModal());
        if (res.ok) {
            history.replace("/login")
        }
        return;
    }

    return (
        <div style={{ position: "absolute" }}>
            <ul>
                <li><button onClick={handleLogout}>Logout</button></li>
            </ul>
        </div>
    )
}

export default withRouter(UserModal);