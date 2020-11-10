import React from 'react';
import { useSelector } from 'react-redux';
import NoteList from './NoteList';
import TrashList from './TrashList';
import TextEditor from './TextEditor';
import MoveNoteModal from './MoveNoteModal';


function Notes(props) {
    const path = window.location.pathname;
    const { noteList: { display: noteList } } = useSelector(state => state.session);
    const noteMoveModal = useSelector(state => state.ui.moveNotes);

    return (
        <section style={{display: "flex"}}>
            { noteMoveModal ? <MoveNoteModal /> : <></>}
            {path === '/notes' ? <NoteList hidden={!noteList} /> : <TrashList hidden={!noteList} />}
            <TextEditor />
        </section>
    );
}
export default Notes;