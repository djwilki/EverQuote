import React from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { setSelectedNotebook, setNoteList } from '../store/session';

const NotebookSelect = ({ notebook, history }) => {
    const dispatch = useDispatch();
    const handleSelect = (e) => {
        e.preventDefault();
        console.log(e.target.value)
        dispatch(setSelectedNotebook(Number(e.target.value)));
        dispatch(setNoteList("notebook", Number(e.target.value)));
        history.replace('/notes');
        return;
    }
    return (
        <li key={notebook.id}>
                <button value={notebook.id} onClick={handleSelect}>{notebook.title}</button>
            </li>
    )
}

export default withRouter(NotebookSelect);