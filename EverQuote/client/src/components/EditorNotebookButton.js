import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setNoteList } from '../store/session';
import noteStyles from '../styles/note.module.css';

const EditorNotebookButton = ({ activeNotebook }) => {
    const dispatch = useDispatch();

    const [showTooltip, setShowTooltip] = useState(false);

    const handleNotebookClick = () => {
        dispatch(setNoteList("notebook", activeNotebook.id));
    }

    const handleHover = () => {
        setShowTooltip(!showTooltip);
    }

    return (
        <div
        className={noteStyles.notebookButtonContainer}
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}>
            <button className={noteStyles.notebookButton} onClick={handleNotebookClick}>
                <div className={noteStyles.notebookSVGWrapper}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14"><path fill-rule="evenodd" d="M3 2v10h7a1 1 0 001-1V3a1 1 0 00-1-1H3zM2 1h8a2 2 0 012 2v8a2 2 0 01-2 2H2V1zm2 1v10h1V2H4zm2 3v1h4V5H6z"></path></svg>
                </div>
                <span>{activeNotebook ? activeNotebook.title : ""}</span>
            </button>
            <div className={showTooltip ? noteStyles.notebookTooltip : "hidden"}>
                <div className={noteStyles.notebookTooltipTriangle}></div>
                <span>Go to Notebook</span>
            </div>
        </div>
    )
}

export default EditorNotebookButton;