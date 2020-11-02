import React from 'react';
import { useSelector } from 'react-redux';
import NoteList from './NoteList';
import TextEditor from './TextEditor';


function Notes(props) {
    const { noteList: { display: noteList } } = useSelector(state => state.session);

    return (
        <section style={{display: "flex"}}>
            {noteList ? <NoteList /> : <></>}
            <TextEditor />
        </section>
    );
}
export default Notes;