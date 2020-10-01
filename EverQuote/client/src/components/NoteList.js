import React from 'react';
import { connect } from 'react-redux';

const NoteList = ({ noteList, notes }) => {

    return (
        <div style={{width: "380px", height: "100vh", backgroundColor: "#F8F8F8"}}>
            <div>
            { noteList ? <h1>{noteList}</h1> : <h1 style={{color: "black"}}>All Notes</h1> }
            </div>
            { notes.map((note) => {
                return (
                    <div>
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
        notes: Object.values(state.entities.notes)
    };
}

export default connect(mapStateToProps)(NoteList);