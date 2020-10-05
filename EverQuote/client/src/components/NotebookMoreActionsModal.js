import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { addUserNotebooks } from '../store/notesbooks'
import EditNotebookModal from "./EditNotebookModal";

const NotebookMoreActionsModal = ({ MoreActionsNotebookModal, EditNotebookModal }) => {
    const [title, setTitle] = useState("");
    const dispatch = useDispatch();
    const userId = useSelector(state => state.session.user_id)



    const handleClick = async (event) => {
        event.stopPropagation();
        MoreActionsNotebookModal(event);
    }
    return (
        <>
        <div style={{position: "relative", zIndex: "8", backgroundColor: "white", left: "-100px"}}>
            <button onClick={(e)=>{

            }} >Rename notebook</button>
        </div>
        </>
    )
}

export default NotebookMoreActionsModal;