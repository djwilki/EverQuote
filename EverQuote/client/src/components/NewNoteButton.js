import React from 'react';
import { useDispatch, connect } from 'react-redux';
import { addNote } from '../store/notes';
import styles from '../styles/navbar.module.css';

const NewNoteButton = ({ userId, selectedNotebookId }) => {
    const dispatch = useDispatch();

    const handleClick = async (event) => {
        event.stopPropagation();
        const res = await dispatch(addNote(userId, selectedNotebookId));

        if (res.ok) {
            return;
        }
    }

    return (
        <button type="button" className={styles.new_note_button} onClick={handleClick}>New Note</button>
    );
}

const mapStateToProps = (state, ownProps) => {
    return {
        userId: state.session.user_id,
        selectedNotebookId: state.session.selectedNotebookId
    }
}

export default connect(mapStateToProps)(NewNoteButton);