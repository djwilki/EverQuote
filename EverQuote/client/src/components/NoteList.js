import React from 'react';
import { connect } from 'react-redux';
import NoteCard from './NoteCard';

const NoteList = ({ selectedNotebook, notes }) => {

    return (
        <div style={{ width: "380px", height: "100vh", backgroundColor: "#F8F8F8" }}>
            <div>
                {selectedNotebook ? <h1>{selectedNotebook.title}</h1> : <h1 style={{ color: "black" }}>All Notes</h1>}
                <h3>{notes.length} Notes</h3>
            </div>
            { notes.map((note, i) => {
                return (
                    <NoteCard key={`note-${i + 1}`} note={note} />
                );
            })}
        </div>
    );
}

const mapStateToProps = (state, ownProps) => {
    let notes = Object.values(state.entities.notes).filter((note) => note.notebookId === state.session.selectedNotebookId);

    notes.sort((a, b) => {
        const aDate = new Date(a.updated_at)
        const bDate = new Date(b.updated_at)

        return bDate.getTime() - aDate.getTime();
    });

    return {
        selectedNotebook: state.entities.notebooks[state.session.selectedNotebookId],
        notes
    };
}

export default connect(mapStateToProps)(NoteList);