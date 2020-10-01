import React from 'react';
import { connect } from 'react-redux';

const NoteList = ({ noteList, notes }) => {

    return (
        <div style={{width: "20%", height: "100%", backgroundColor: "#F8F8F8"}}>
            <div>
            { noteList ? <h3>{noteList}</h3> : <h3 style={{color: "black"}}>All Notes</h3> }
            </div>
            { notes.map((note) => {
                return (
                    <div>
                        {
                            <>
                            <h5>{note.title}</h5>
                            <p>{note.content}</p>
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