import React, { useEffect } from 'react';
import MainContent from './MainContent';
import Navbar from './Navbar';
import { connect, useDispatch } from 'react-redux';
import { setUserNotes } from '../store/notes';
import { setSelectedNotebook } from '../store/session';
import { setUserNotebooks } from '../store/notesbooks';
import { setUserTrash } from '../store/trash';
import { addUserNotebooks } from '../store/notesbooks';
import { setUserInfo } from '../store/users';

function Home({ userId, selectedNotebookId, notes, notebooks, defaultNotebookId }) {
    const dispatch = useDispatch();

    useEffect(() => {
        const getNotes = async () => {
            await dispatch(setUserNotes(userId));
        }
        const getTrash = async () => {
            await dispatch(setUserTrash(userId));
        }
        getNotes();
        getTrash();

        const getNotebooks = async () => {
            await dispatch(setUserNotebooks(userId));
        }
        getNotebooks();
        dispatch(setSelectedNotebook(selectedNotebookId || 1));

        const getUserInfo = async () => {
            await dispatch(setUserInfo(userId));
        }
        getUserInfo();
        
        dispatch(setSelectedNotebook(selectedNotebookId || defaultNotebookId));
    }, [dispatch, userId, selectedNotebookId]);

    return (
        <>
            <div style={{ display: "flex", height: "100vh" }}>
                <Navbar />
                <MainContent />
            </div>
        </>
    );
}

const mapStateToProps = (state, ownProps) => {
    return {
        userId: state.session.user_id,
        selectedNotebookId: state.session.selectedNotebookId,
        notebooks: state.entities.notebooks,
        defaultNotebookId: state.session.defaultNotebookId
    }
};

export default connect(mapStateToProps)(Home);