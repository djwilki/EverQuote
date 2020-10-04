import React from 'react';
import { useDispatch } from 'react-redux';


const MoveNotebookTitle = ({ notebook }) => {
    const dispatch = useDispatch();
    const handleMoveNote = () => {
        dispatch(moveNote(notebook.id, noteId));
    }
    return (
    <tr>
        <td onClick={handleMoveNote}>
            {notebook.title}
        </td>
    </tr>
    )
}

export default MoveNotebookTitle;