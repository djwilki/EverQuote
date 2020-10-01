import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';


const TextEditor = ({ activeNoteObj }) => {

    return (
        <div style={{display: "flex", flexDirection: "column", width: "100%", height: "100vh"}}>
            <div style={{minHeight: "92px", backgroundColor: "white", border: "1px solid #F2F2F2"}}>
                Toolbar Placeholder
            </div>
        <form style={{display: "flex", flexDirection: "column", width: "100%", height: "799px", border: "1px solid #F2F2F2"}}>
            <input type="text" style={{height: "8%", border: "none"}}/>
            <textarea rows="8" style={{height: "92%", border: "none"}}></textarea>
        </form>
        <div style={{backgroundColor: "white", height: "100%"}}>
            <span>Note saved</span>
        </div>
        </div>
    );
}

const mapStateToProps = (state, ownProps) => {
    return {
        activeNoteObj: state.entities.notes[state.session.activeNote]
    }
}

export default connect(mapStateToProps)(TextEditor);