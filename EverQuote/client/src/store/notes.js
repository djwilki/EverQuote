import Cookies from 'js-cookie';
import { setActiveNote } from './session';

const ADD_NOTE = '/notes/ADD_NOTE';
const SET_NOTES = '/notes/SET_NOTES';
const UPDATE_NOTE = "/notes/UPDATE_NOTE";

export const setNote = note => {
    return {
        type: ADD_NOTE,
        note
    }
}

export const setNotes = notes => {
    return {
        type: SET_NOTES,
        notes
    }
}

export const updateNoteItem = note => {
    return {
        type: UPDATE_NOTE,
        note
    }
}

export const setUserNotes = userId => {
    const path = `/api/users/${userId}/notes`;
    return async dispatch => {
        const res = await fetch(path);

        res.data = await res.json();
        console.log(res);
        if (res.ok) {
            dispatch(setNotes(res.data));
            dispatch(setActiveNote(Object.values(res.data)[0].id));
        }

        return res;
    }
}

export const addNote = (userId, notebookId) => {
    const csrfToken = Cookies.get('XSRF-TOKEN');
    return async dispatch => {
        const res = await fetch('/api/notes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFTOKEN': csrfToken
            },
            body: JSON.stringify({ userId, notebookId })
        });

        res.data = await res.json();

        if (res.ok) {
            dispatch(setNote(res.data));
        }
        return res;
    }
}

export const updateNote = (noteId, title, content) => {
    const csrfToken = Cookies.get("XSRF-TOKEN");
    return async dispatch => {
        const res = await fetch(`/api/notes/${noteId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "X-CSRFTOKEN": csrfToken
            },
            body: JSON.stringify({ noteId, title, content })
        });

        res.data = await res.json();

        if (res.ok) {
            dispatch(updateNoteItem(res.data));
        }
        return res;
    }
}

export default function noteReducer(state = {}, action) {
    const newState = Object.assign({}, state);
    switch (action.type) {
        case ADD_NOTE:
            const { id } = action.note;
            return { [id]: action.note, ...state };
        case SET_NOTES:
            return { ...action.notes, ...state };
        case UPDATE_NOTE:
            newState[action.note.id] = action.note;
            return newState;
        default:
            return state;
    }
}