import React from 'react';
import { useDispatch, connect } from 'react-redux';
import { setNoteList } from '../store/session';
import { toggleEditorFullscreen, toggleNoteModal } from '../store/ui';
import noteStyles from '../styles/note.module.css';
import EditorNotebookButton from './EditorNotebookButton';
import FullscreenButton from './FullscreenButton';

const TextEditorTopSection = ({ activeNote, activeNotebook }) => {
    const dispatch = useDispatch();

    const genUpdatedAt = (updatedAt) => {
        const lessThan10 = /^0[1-9]/;
        const updatedAtArr = new Date(updatedAt).toDateString().split(" ");

        if (lessThan10.test(updatedAtArr[2])) {
            return `${updatedAtArr[1]} ${updatedAtArr[2][1]}, ${updatedAtArr[3]}`;
        } else {
            return `${updatedAtArr[1]} ${updatedAtArr[2]}, ${updatedAtArr[3]}`;
        }
    }

    const handleNoteModal = () => {
        dispatch(toggleNoteModal());
    }

    return (
        <div className={noteStyles.editorTopSection}>
            <div style={{ display: "flex" }}>
                <FullscreenButton />
                <EditorNotebookButton activeNotebook={activeNotebook} />
            </div>
            <button onClick={handleNoteModal}>...</button>
            <span>Last updated {genUpdatedAt(activeNote.updated_at)}</span>
        </div>
    )
}

TextEditorTopSection.defaultProps = {
    activeNote: {},
    activeNotebook: {}
}

const mapStateToProps = (state, ownProps) => {
    const activeNote = state.entities.notes[state.session.activeNote];
    const activeNotebook = activeNote ? state.entities.notebooks[activeNote.notebookId] : null;
    return {
        activeNote,
        activeNotebook
    }
}

export default connect(mapStateToProps)(TextEditorTopSection);