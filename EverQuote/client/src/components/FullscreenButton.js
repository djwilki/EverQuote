import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleEditorFullscreen, toggleFullscreenTooltip } from '../store/ui';
import noteStyles from '../styles/note.module.css';

const FullscreenButton = () => {
    const dispatch = useDispatch();
    const { editorFullscreen: { isFullscreen, showTooltip } } = useSelector(state => state.ui);

    const handleFullscreen = () => {
        dispatch(toggleEditorFullscreen());
    }

    const handleHover = () => {
        dispatch(toggleFullscreenTooltip());
    }

    return (
        <div className={noteStyles.fullscreenButtonContainer}>
        <button
        className={noteStyles.fullscreenButton}
        onClick={handleFullscreen}
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}>
            {
                isFullscreen
                ? <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="aSj7GAjpRHxXJ-uUqPeBk"><path fillRule="evenodd" d="M6 3a3 3 0 00-3 3v11a3 3 0 003 3h11a3 3 0 003-3V6a3 3 0 00-3-3H6zm2.864 6.78H6.546a.625.625 0 100 1.25h3.817c.35 0 .635-.285.635-.636V6.577a.625.625 0 00-1.25 0v2.319L6.833 5.98a.625.625 0 00-.884.883L8.864 9.78zm5.299 3.468h2.318a.625.625 0 100-1.25h-3.817a.635.635 0 00-.635.635v3.817a.625.625 0 101.25 0V14.13l2.915 2.915a.625.625 0 10.884-.884l-2.915-2.914z"></path></svg>
                : <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6.031 3a3 3 0 00-3 3v11a3 3 0 003 3h11a3 3 0 003-3V6a3 3 0 00-3-3h-11zm4.47 4.289H8.184l2.915 2.914a.625.625 0 01-.884.884L7.3 8.172v2.319a.625.625 0 11-1.25 0V6.674c0-.351.285-.635.635-.635h3.818a.625.625 0 010 1.25zM12.6 15.76h2.318l-2.915-2.915a.625.625 0 11.884-.884l2.915 2.915V12.56a.625.625 0 011.25 0v3.817c0 .35-.285.635-.635.635H12.6a.625.625 0 110-1.25z"></path></svg>
            }
        </button>
        <div className={showTooltip ? noteStyles.fullscreenTooltip : noteStyles.hidden}>
            <div className={noteStyles.fullscreenTooltipTriangle}></div>
            <span>{isFullscreen ? "Collapse Note" : "Expand Note"}</span>
        </div>
        </div>
    )
}

export default FullscreenButton;