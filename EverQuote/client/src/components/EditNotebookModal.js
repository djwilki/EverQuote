import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { editUserNotebooks } from '../store/notesbooks'
import { toggleCreateNotebookModal, toggleEditNotebookModal, toggleNotebookModal } from '../store/ui'


const EditNotebookModal = ({ editNotebookId }) => {
    const [title, setTitle] = useState("");
    const dispatch = useDispatch();
    const userId = useSelector(state => state.session.user_id)


    const handleClick = async (event) => {
        event.stopPropagation();
        const notebookId = editNotebookId
        const res = await dispatch(editUserNotebooks(title, false, userId, notebookId));

        if (res.ok) {
            togEditNotebookModal(event);
            return;
        }
    }

    const togEditNotebookModal = (e) => {
        e.preventDefault()
        dispatch(toggleEditNotebookModal())
    }


    return (
        <div style={{ position: "fixed", width: "100%", height: "100%", backgroundColor: "rgba(133, 133, 133, 0.5)", zIndex: "9" }}>
            <div style={{ backgroundColor: "white", opacity: "100%", zIndex: "10", }}>
                <div>
                    <h4>Rename notebook</h4>
                    <button type="button" onClick={(e)=>{togEditNotebookModal(e)}}>
                        <svg fill="none" xmlns="http://www.w3.org/2000/svg" className="vQzJB1pohgMjFOPTzHGKk" id="qa-DIALOG_CLOSE"><path d="M17.53 6.47a.75.75 0 00-1.06 0L12 10.94 7.53 6.47a.75.75 0 00-1.06 1.06L10.94 12l-4.47 4.47a.75.75 0 101.06 1.06L12 13.06l4.47 4.47a.75.75 0 101.06-1.06L13.06 12l4.47-4.47a.75.75 0 000-1.06z" fill="currentColor"></path></svg>
                    </button>
                </div>
                <div>Notebooks are useful for grouping notes around a common topic. They can be private or shared.</div>
                <form action="" method="">
                    <label>Name</label>
                    <input name="title" type="text" placeholder="Notebook name" onChange={(e) => setTitle(e.target.value)} />
                    <div>
                        <button type="button" onClick={(e)=>{togEditNotebookModal(e)}}>Cancel</button>
                        <button type="button" onClick={handleClick}>Continue</button>
                    </div>
                </form>
            </div>
        </div>
    )
}


export default EditNotebookModal;
