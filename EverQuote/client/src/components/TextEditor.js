import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';


const TextEditor = ({ activeNoteObj }) => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

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

    return (
        <div style={{ display: "flex", flexDirection: "column", width: "100%", height: "100vh" }}>
            <div style={{ minHeight: "92px", backgroundColor: "white", border: "1px solid #F2F2F2" }}>
                Toolbar Placeholder
            </div>
            <form style={{ display: "flex", flexDirection: "column", width: "100%", height: "799px", border: "1px solid #F2F2F2" }}>
                <input type="text" style={{ height: "8%", border: "none" }} value={title} onChange={handleTitleChange} />
                <textarea rows="8" style={{ height: "92%", border: "none" }} value={content} onChange={handleContentChange}></textarea>
            </form>
            <div style={{ backgroundColor: "white", height: "100%" }}>
                <span>Note saved</span>
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