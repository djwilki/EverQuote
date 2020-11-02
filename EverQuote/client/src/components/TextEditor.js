import React, { useState, useEffect, useRef } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { updateNote } from '../store/notes';
import TextEditorTopSection from './TextEditorTopSection';
import TextEditorContext from '../contexts/TextEditorContext';
import noteStyles from '../styles/note.module.css';
import TextEditorBottomBar from './TextEditorBottomBar';


const TextEditor = ({ activeNoteObj }) => {
    const dispatch = useDispatch();
    const { editorFullscreen: { isFullscreen: editorFullscreen } } = useSelector(state => state.ui);
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
            dispatch(updateNote(activeNoteObj.id, title, content));
            setLoading(false);
        }, 400);
        return;
    }

    const preventSubmit = event => {
        event.preventDefault();
    }

    const value = {
        loading
    }

    return (
        <TextEditorContext.Provider value={value}>
        <div className={editorFullscreen ? noteStyles.editorFullscreen : noteStyles.editor}>
            <TextEditorTopSection />
            <form onSubmit={preventSubmit} className={noteStyles.noteForm} onKeyUp={handleAutoSave}>
                <input
                className={noteStyles.noteTitleInput}
                type="text" value={title}
                onChange={handleTitleChange}
                placeholder="Title"/>
                <textarea
                className={noteStyles.noteContentInput}
                rows="8"
                value={content}
                onChange={handleContentChange}
                resize="none"
                placeholder="Start writing your note!"></textarea>
            </form>
            <TextEditorBottomBar />
        </div>
        </TextEditorContext.Provider>
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