import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NoteRow from './NoteRow';
import NotebookMoreActionsModal from './NotebookMoreActionsModal'


const NotebookRow = ({ notebook, username }) => {
    const notes = useSelector(state => Object.values(state.entities.notes).filter((note) => note.notebookId === notebook.id));
    const notebookOptions = useSelector(state => state.ui.notebookOptions)

    // const MoreActionsNotebookModal = (e) => {
    //     e.preventDefault()
    //     dispatch(toggleNotebookModal());
    // }

    return (
        <>
            <tr>
                <td>
                    <button >
                        <svg style={{ width: "24px", height: "24px" }} fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10 7l6 5-6 5V7z" fill="currentColor"></path></svg>
                    </button>
                    <svg style={{ width: "24px", height: "24px" }} fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.035 4.5H5.958v15h2.077v-15z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M9.285 4.5v15h7.09c.92 0 1.667-.746 1.667-1.667V6.167c0-.92-.747-1.667-1.667-1.667h-7.09zm6.63 5.083a.75.75 0 01-.75.75h-3a.75.75 0 110-1.5h3a.75.75 0 01.75.75z" fill="currentColor"></path></svg>
                    {notebook.title}
                </td>
                <td>{username}</td>
                <td>{notebook.updated_at}</td>
                <td>
                    ...
                </td>
                {notebookOptions ? <NotebookMoreActionsModal /> : ""}
            </tr>
            { notes.map((note, i) => {
                return (
                    <NoteRow key={`notebook-${notebook.id}-note-${i + 1}`} note={note} username={username} />
                )
            })}
        </>
    );
}

export default NotebookRow;