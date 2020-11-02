import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMoveModal, toggleNoteModal } from '../store/ui';
import { trashNote } from '../store/trash';

const NoteOptionModal = () => {
    const dispatch = useDispatch();
    const noteId = useSelector(state => state.session.activeNote)
    const handleMoveModal = async e => {
        await dispatch(toggleMoveModal());
        await dispatch(toggleNoteModal());
    }

    const handleTrash = async e => {
        await dispatch(trashNote(noteId));
        await dispatch(toggleNoteModal());
    }

    return (
        <div style={{ position: "absolute" }}>
            <ul>
                <li><button onClick={handleMoveModal}>Move...</button></li>
                <li><button onClick={handleTrash}>Move to Trash</button></li>
            </ul>
        </div>
    )
}