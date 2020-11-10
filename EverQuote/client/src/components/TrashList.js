import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { setActiveNote } from '../store/session';
import NoteCard from './NoteCard';
import noteStyles from '../styles/note.module.css';

const TrashList = ({hidden}) => {
    const dispatch = useDispatch();
    const notesObj = useSelector(state => state.entities.notes);
    const notes = Object.values(notesObj);
    const trash = notes.filter(note => note.isTrash);

    useEffect(() => {
        if (trash.length) {
            dispatch(setActiveNote(trash[0].id));
        }
    }, []);

    return (
        <div className={hidden ? "hidden" : noteStyles.noteListAndHeader}>
            <div className={noteStyles.noteListHeaderContainer}>
                <h1 className={noteStyles.noteListHeader}>Trash</h1>
                <span className={noteStyles.noteAmount}>{trash.length} Notes</span>
            </div>
            <div className={noteStyles.noteList + " noteList"}>
            { trash.map((note, i) => {
                return (
                    <NoteCard key={`note-${i + 1}`} note={note} />
                );
            })}
            </div>
        </div>
    );
};


const mapStateToProps = (state, ownProps) => {
    let notes;

    if (state.session.noteList.id) {
        notes = Object.values(state.entities.notes).filter((note) => note.notebookId === state.session.noteList.id)
    } else {
        notes = Object.values(state.entities.notes);
    }

    notes.sort((a, b) => {
        const aDate = new Date(a.updated_at)
        const bDate = new Date(b.updated_at)

        return bDate.getTime() - aDate.getTime();
    });

    return {
        trashList: state.session.noteList.id ? state.entities.notebooks[state.session.noteList.id] : null,
        notes
    };
};

export default TrashList;