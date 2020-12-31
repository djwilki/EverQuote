import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveNote } from '../store/session';
import noteStyles from '../styles/note.module.css';

const NoteCard = ({ note }) => {
  const dispatch = useDispatch();
  const isActive = useSelector((state) => note.id === state.session.activeNote);

  const handleNoteClick = () => {
    dispatch(setActiveNote(note.id));
  };

  const genUpdatedAt = (updatedAt) => {
    let diff = (Date.now() - new Date(updatedAt).getTime()) / (1000 * 86400);
    if (diff < 1) {
      return 'Updated today';
    } else if (diff === 1) {
      return 'Updated yesterday';
    } else {
      return new Date(updatedAt)
        .toDateString()
        .split(' ')
        .slice(1, 3)
        .join(' ');
    }
  };

  const findSlice = (noteContent) => {
    let slice = window.innerWidth > 1440 ? 80 : 72;
    if (noteContent.includes(' ')) {
      while (!/\w/.test(noteContent[slice]) || noteContent[slice + 1] !== ' ') {
        slice--;
      }

      slice++;
    }

    return slice;
  };

  return (
    <div
      className={isActive ? noteStyles.activeCard : noteStyles.notecard}
      onClick={handleNoteClick}
    >
      {
        <>
          <h5 className={noteStyles.noteHeader}>
            {note.title ? note.title : 'Untitled'}
          </h5>
          <span
            className={
              note.content.length > (window.innerWidth > 1440 ? 80 : 72)
                ? noteStyles.noteText
                : noteStyles.lessText
            }
          >
            {note.content.length > window.innerWidth > 1440
              ? 80
              : 72
              ? note.content.slice(0, findSlice(note.content))
              : note.content}
          </span>
        </>
      }
      <span
        className={isActive ? noteStyles.activeUpdated : noteStyles.noteUpdated}
      >
        {genUpdatedAt(note.updated_at)}
      </span>
    </div>
  );
};

export default NoteCard;
