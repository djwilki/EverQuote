import React, { useState, useEffect, useRef } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { updateNote, updateNoteItem } from '../store/notes';
import TextEditorTopSection from './TextEditorTopSection';
import TextEditorContext from '../contexts/TextEditorContext';
import noteStyles from '../styles/note.module.css';
import TextEditorBottomBar from './TextEditorBottomBar';
import { Editor } from '@tinymce/tinymce-react';


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
        handleContentChange(activeNoteObj.content);
    }, [activeNoteObj]);

    useEffect(()=> {
        handleAutoSave()
    }, [content, title])

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    }

    const handleContentChange = (contents, editor) => {
        setContent(contents);
    }

    const handleAutoSave = () => {
        setLoading(true);
        console.log("content", content)
        dispatch(updateNoteItem({
            id: activeNoteObj.id,
            title,
            content,
            isTrash: activeNoteObj.isTrash,
            notebookId: activeNoteObj.notebookId,
            userId: activeNoteObj.userId,
            created_at: activeNoteObj.created_at,
            updated_at: activeNoteObj.updated_at
        }));
        if (autosaveTimeout.current) {
            clearTimeout(autosaveTimeout.current);
        }
        autosaveTimeout.current = setTimeout(async () => {
            await dispatch(updateNote(activeNoteObj.id, title, content));
            setLoading(false);
        }, 1000);
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
                <form onSubmit={preventSubmit} className={noteStyles.noteForm} >
                    <div id='mytoolbar' onClick={handleAutoSave}></div>
                        <input
                            className={noteStyles.noteTitleInput}
                            type="text" value={title}
                            onChange={handleTitleChange}
                            placeholder="Title" />
                    <Editor
                        apiKey='anw7qgq53nsej0oxjh31k6zuyjstble4qpu34df6qkdm628u'
                        initialValue={content}
                        value={activeNoteObj.content}
                        init={{
                            height: 500,
                            menubar: false,
                            plugins: [
                                'advlist autolink lists link image charmap print preview anchor',
                                'searchreplace visualblocks code fullscreen',
                                'insertdatetime media table paste code help wordcount'
                            ],
                            inline: true,
                            fixed_toolbar_container: '#mytoolbar',
                            toolbar:
                                'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help'
                        }}
                        onEditorChange={handleContentChange}
                    />
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
