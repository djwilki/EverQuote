import React, { useEffect } from 'react';
import MainContent from './MainContent';
import Navbar from './Navbar';
import { connect, useDispatch } from 'react-redux';
import { setUserNotes } from '../store/notes';
import { setSelectedNotebook } from '../store/session';
import { setUserNotebooks } from '../store/notesbooks';
import { setUserTrash } from '../store/trash';

function Home({ userId, selectedNotebookId, notes }) {
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
        getNotebooks()
        dispatch(setSelectedNotebook(selectedNotebookId || 1));
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
        selectedNotebookId: state.session.selectedNotebookId
    }
};

export default connect(mapStateToProps)(Home);