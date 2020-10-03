import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { addUserNotebooks } from '../store/notesbooks'

const NotebookMoreActionsModal = ({ notebookModal }) => {
    const [title, setTitle] = useState("");
    const dispatch = useDispatch();
    const userId = useSelector(state => state.session.user_id)



    const handleSubmit = async (event) => {
        event.stopPropagation();
        const res = await dispatch(addUserNotebooks(title, false, userId));

        if (res.ok) {
            return;
        }
    }
    return (
        <>
        <div style={{position: "relative", zIndex: "8", backgroundColor: "white"}}>
            <button onClick={(e)=>{

            }} >Rename notebook</button>
        </div>
        </>
    )
}

export default NotebookMoreActionsModal;