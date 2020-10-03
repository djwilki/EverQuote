import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMoveModal, toggleNoteModal } from '../store/ui';
import { trashNote } from '../store/trash';

const NoteOptionModal = () => {
    const dispatch = useDispatch();
    const noteId = useSelector(state => state.session.activeNote)
    const handleMoveModal = e => {
        dispatch(toggleMoveModal());
        dispatch(toggleNoteModal());
    }

    const handleTrash = e => {
        dispatch(trashNote(noteId));
        dispatch(toggleNoteModal());
    }
    
    return (
        <div>
            <ul>
                <li><button onClick={handleMoveModal}>Move...</button></li>
                <li><button onClick={handleTrash}>Move to Trash</button></li>
            </ul>
        </div>
    )
}