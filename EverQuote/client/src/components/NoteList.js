import React from 'react';
import { connect } from 'react-redux';

const NoteList = ({ noteList }) => {

    return (
        <div style={{width: "20%", height: "100%", backgroundColor: "#F8F8F8"}}>
            { noteList ? <h3>{noteList}</h3> : <h3 style={{color: "black"}}>All Notes</h3> }
        </div>
    );
}

const mapStateToProps = (state, ownProps) => {
    return {
        noteList: state.session.noteList
    };
}

export default connect(mapStateToProps)(NoteList);