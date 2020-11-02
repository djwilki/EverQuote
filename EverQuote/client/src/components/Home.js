import React, { useEffect } from 'react';
import MainContent from './MainContent';
import Navbar from './Navbar';
import { connect, useDispatch, useSelector } from 'react-redux';
import { setUserNotes } from '../store/notes';
import { setSelectedNotebook } from '../store/session';
import { setUserNotebooks } from '../store/notesbooks';
import { setUserTrash } from '../store/trash';
import { addUserNotebooks } from '../store/notesbooks';
import { setUserInfo } from '../store/users';

function Home({ userId, selectedNotebookId, notes, notebooks, defaultNotebookId }) {
    const dispatch = useDispatch();
    const { editorFullscreen: { isFullscreen: editorFullscreen } } = useSelector(state => state.ui);

    useEffect(() => {
        const getNotes = async () => {
            await dispatch(setUserNotes(userId));
        }
        const getTrash = async () => {
            await dispatch(setUserTrash(userId));
        }

        const getNotebooks = async () => {
            await dispatch(setUserNotebooks(userId));
        }

        const getUserInfo = async () => {
            await dispatch(setUserInfo(userId));
        }

        getNotes();
        getTrash();
        getNotebooks();
        getUserInfo();

        dispatch(setSelectedNotebook(selectedNotebookId || defaultNotebookId));
    }, [dispatch, userId]);

    return (
        <>
            <div style={{ display: "flex", height: "100vh" }}>
               { editorFullscreen ? <></> : <Navbar /> }
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