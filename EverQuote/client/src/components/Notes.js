import React from 'react';
import NoteList from './NoteList';
import TextEditor from './TextEditor';


function Notes(props) {
    return (
        <section style={{display: "flex"}}>
            <NoteList />
            <TextEditor />
        </section>
    );
}
export default Notes;