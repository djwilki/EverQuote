import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleEditorFullscreen } from '../store/ui';
import noteStyles from '../styles/note.module.css';

const FullscreenButton = () => {
    const dispatch = useDispatch();

    const handleFullscreen = () => {
        dispatch(toggleEditorFullscreen());
    }

    return (
        <button className={noteStyles.fullscreenButton} onClick={handleFullscreen}>
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6.031 3a3 3 0 00-3 3v11a3 3 0 003 3h11a3 3 0 003-3V6a3 3 0 00-3-3h-11zm4.47 4.289H8.184l2.915 2.914a.625.625 0 01-.884.884L7.3 8.172v2.319a.625.625 0 11-1.25 0V6.674c0-.351.285-.635.635-.635h3.818a.625.625 0 010 1.25zM12.6 15.76h2.318l-2.915-2.915a.625.625 0 11.884-.884l2.915 2.915V12.56a.625.625 0 011.25 0v3.817c0 .35-.285.635-.635.635H12.6a.625.625 0 110-1.25z"></path></svg>
        </button>
    )
}

export default FullscreenButton;