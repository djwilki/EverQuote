import React, { useState, useEffect, useRef } from 'react';
import { connect, useDispatch } from 'react-redux';
import { updateNote } from '../store/notes';


const TextEditor = ({ activeNoteObj }) => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [loading, setLoading] = useState(false);
    let autosaveTimeout = useRef(null);

    useEffect(() => {
        setTitle(activeNoteObj.title);
        setContent(activeNoteObj.content);
    }, [activeNoteObj]);

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    }

    const handleContentChange = event => {
        setContent(event.target.value);
    }

    const handleAutoSave = event => {
        setLoading(true);
        event.stopPropagation();
        if (autosaveTimeout.current) {
            clearTimeout(autosaveTimeout.current);
        }
        autosaveTimeout.current = setTimeout(async () => {
            console.log(activeNoteObj.id, title, content);
            const res = await dispatch(updateNote(activeNoteObj.id, title, content));
            setLoading(false);
        }, 250);
        return;
    }

    const preventSubmit = event => {
        event.preventDefault();
    }

    return (
        <div style={{ display: "flex", flexDirection: "column", width: "100%", height: "100vh" }}>
            <div style={{ minHeight: "92px", backgroundColor: "white", border: "1px solid #F2F2F2" }}>
                Toolbar Placeholder
            </div>
            <form onSubmit={preventSubmit} style={{ display: "flex", flexDirection: "column", width: "100%", height: "799px", border: "1px solid #F2F2F2" }} onKeyUp={handleAutoSave}>
                <input type="text" style={{ height: "8%", border: "none" }} value={title} onChange={handleTitleChange} />
                <textarea rows="8" style={{ height: "92%", border: "none" }} value={content} onChange={handleContentChange} resize="none"></textarea>
            </form>
            <div style={{ backgroundColor: "white", height: "100%" }}>
                <span>{loading ? "Processing and saving changes..." : "Note saved"}</span>
            </div>
        </div>
    );
}

TextEditor.defaultProps = {
    activeNoteObj: {
        title: "",
        content: ""
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        activeNoteObj: state.entities.notes[state.session.activeNote]
    }
}

export default connect(mapStateToProps)(TextEditor);