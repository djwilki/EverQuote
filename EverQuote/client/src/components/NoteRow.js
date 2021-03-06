import React from 'react';
import { useDispatch } from 'react-redux';
import { setNoteList, setActiveNote } from '../store/session';
import { NavLink } from 'react-router-dom'


const NoteRow = ({ note, username }) => {
    const dispatch = useDispatch();

    const setSelectedNote = () => {
        dispatch(setActiveNote(note.id));
        dispatch(setNoteList("notebook", note.notebookId, false));
    }

    return (
        <tr key={note.id}>
            <td style={{ padding: "0px 0px 0px 64px" }}>
                <svg style={{ width: "24px", height: "24px" }} fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M7.665 4.5h8.75c.92 0 1.667.746 1.667 1.667v8.748h-3.334a.625.625 0 00-.625.624v3.958H7.665c-.92 0-1.667-.747-1.667-1.667V6.167c0-.92.747-1.667 1.667-1.667zm7.037 4.584a.625.625 0 100-1.25H9.298a.625.625 0 100 1.25h5.404zm.625 2.918c0 .345-.28.625-.625.625H9.298a.625.625 0 010-1.25h5.404c.345 0 .625.28.625.625zm-4.363 4.158a.625.625 0 100-1.25H9.298a.625.625 0 100 1.25h1.666z" fill="currentColor"></path><path d="M15.373 16.164h2.157l-2.107 2.693-.05.06v-2.753z" fill="currentColor"></path></svg>
                <NavLink onClick={setSelectedNote} to='/notes'>{note.title}</NavLink>
            </td>
            <td>{username}</td>
            <td>{note.updated_at}</td>
            <td>
                ...
            </td>
        </tr>
    )
}
export default NoteRow;
