import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';


const MoveNotebookTitle = ({ notebook, activeNote, selectedNotebook, setSelectedNotebook }) => {
    const dispatch = useDispatch();


    const handleSelectNotebook = e => {
        e.preventDefault();
        setSelectedNotebook(notebook.id);
        return;
    }

    return (
    <tr onClick={handleSelectNotebook}>
        <td>
            {
                selectedNotebook === notebook.id ? <svg style={{width: "24", height: "24"}} fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.572 6.35a1.013 1.013 0 011.531 1.325l-8.212 9.488a1.013 1.013 0 01-1.532 0L5.497 12.7a1.012 1.012 0 111.531-1.325l3.097 3.578 7.447-8.603z" fill="currentColor"></path>
                                                        </svg> : ""
            }
        </td>
        <td>
            <svg style={{marginTop: '2px', width: "24", height: "24", viewBox: "0 0 24 24"}} xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M9 4h7a2 2 0 012 2v11a2 2 0 01-2 2H9V4zM6 4h2v15H6V4zm5.5 4a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h4a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-4z"></path>
            </svg>
        </td>
        <td style={{display: 'inline-block', marginLeft: '6px', whiteSpace: 'nowrap', flex: '1', fontSize: '14px', overflow: 'hidden', textOverflow: 'ellipsis'}}>
            {notebook.title}
        </td>
        <td style={{color: '#a6a6a6', maxWidth: '120px', display: 'inline-block', marginLeft: '6px', whiteSpace: 'nowrap', flex: '1', fontSize: '14px', overflow: 'hidden', textOverflow: 'ellipsis'}}>
            {activeNote.notebookId === notebook.id ? '(current)' : ''}
        </td>
        <td style={{marginLeft: 'auto', paddingLeft: '16px', display: 'flex', alignItems: 'center', width: '81px', flexShrink: '0'}}></td>
    </tr>
    )
}

export default MoveNotebookTitle;