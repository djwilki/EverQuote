import React from 'react';
import { connect } from 'react-redux';

const NoteList = ({ noteList, notes }) => {

    return (
        <div style={{width: "380px", height: "100vh", backgroundColor: "#F8F8F8"}}>
            <div>
            { noteList ? <h1>{noteList}</h1> : <h1 style={{color: "black"}}>All Notes</h1> }
            </div>
            { notes.map((note, i) => {
                return (
                    <div key={`note-${i + 1}`}>
                        {
                            <>
                            <h3>{note.title}</h3>
                            <span>{note.content}</span>
                            </>
                        }
                    </div>
                );
            })}
        </div>
    );
}

const mapStateToProps = (state, ownProps) => {
    return {
        noteList: state.session.noteList,
        notes: !state.session.noteList ? Object.values(state.entities.notes) : Object.values(state.entities.notes).filter((note) => note.notebookId === state.session.noteList)
    };
}

export default connect(mapStateToProps)(NoteList);