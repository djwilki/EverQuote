import React from 'react';


const TextEditor = () => {
    return (
        <form style={{display: "flex", flexDirection: "column", width: "100%", height: "100vh"}}>
            <input type="text" style={{height: "8%"}}/>
            <textarea rows="8" style={{height: "92%"}}></textarea>
        </form>
    );
}

export default TextEditor;