import React from 'react';
import { useDispatch } from 'react-redux';
import { setActiveNote } from '../store/session';

const NoteCard = ({ note }) => {
    const dispatch = useDispatch();

    const handleNoteClick = () => {
        dispatch(setActiveNote(note.id));
    }

    return (
        <div onClick={handleNoteClick}>
            {
                <>
                    <h3>{note.title}</h3>
                    <span>{note.content.length > 60 ? note.content.slice(0, 60) + '...' : note.content ? note.content : ""}</span>
                </>
            }
        </div>
    )
}

export default NoteCard;