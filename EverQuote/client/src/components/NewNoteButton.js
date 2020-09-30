import React from 'react';
import { useDispatch, connect } from 'react-redux';
import { addNote } from '../store/notes';

const NewNoteButton = ({ userId }) => {
    const dispatch = useDispatch();

    const handleClick = async (event) => {
        event.stopPropagation();
        const res = await dispatch(addNote(userId, 1));

        if (res.ok) {
            return;
        }
    }

    return (
        <button type="button" className="newNoteBtn" onClick={handleClick}>New Note</button>
    );
}

const mapStateToProps = (state, ownProps) => {
    return {
        userId: state.auth.user_id
    }
}

export default connect(mapStateToProps)(NewNoteButton);