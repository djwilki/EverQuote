import React from 'react';
import {useDispatch} from 'react-redux';
import { toggleMoveModal } from '../store/ui';

const MoveNoteButton = () => {
    const dispatch = useDispatch();

    const handleMoveModal = () => {
        dispatch(toggleMoveModal());
    };

    return (
        <div>
            <button onClick={handleMoveModal} style={{padding: '4px 2px', cursor: 'pointer', verticalAlign: 'middle', borderRadius: '4px'}}>
                <svg style={{ width: '20', height: '20' }} fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path d="M6.042 2.5A2.292 2.292 0 003.75 4.792v10.416A2.292 2.292 0 006.042 17.5h5.605a4.569 4.569 0 01-.229-1.25H6.042A1.042 1.042 0 015 15.208V4.792c0-.576.466-1.042 1.042-1.042h7.916c.576 0 1.042.466 1.042 1.042v6.786a4.6 4.6 0 011.25-.102V4.792A2.292 2.292 0 0013.958 2.5H6.042z" fill="currentColor"></path>
                    <path d="M13.327 6.8c0 .346-.28.626-.625.626H7.298a.625.625 0 010-1.25h5.404c.345 0 .625.28.625.625zm-.625 3.75a.625.625 0 100-1.25H7.298a.625.625 0 000 1.25h5.404zm-3.738 3.125a.625.625 0 100-1.25H7.298a.625.625 0 100 1.25h1.666zm9.626 3.062a.982.982 0 000-1.39l-.002-.001-1.843-1.72a.623.623 0 00-.88.882l.004.004 1.014.907h-3.06c-.307 0-.532.294-.532.623 0 .33.225.623.533.623h3.055l-1.014.884a.623.623 0 00.88.882l1.845-1.694z" fill="currentColor"></path>
                </svg>
            </button>
        </div>
    )
};

export default MoveNoteButton;