import Cookies from 'js-cookie';

const ADD_NOTE = '/notes/ADD_NOTE';
const SET_NOTES = '/notes/SET_NOTES';

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

export const setUserNotes = userId => {
    const path = `/api/users/${userId}/notes`;
    return async dispatch => {
        const res = await fetch(path);

        res.data = await res.json();
        console.log(res);
        if (res.ok) {
            dispatch(setNotes(res.data));
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

export default function noteReducer(state = {}, action) {
    switch (action.type) {
        case ADD_NOTE:
            const { id } = action.note;
            return { [id]: action.note, ...state };
        case SET_NOTES:
            return { ...action.notes, ...state };
        default:
            return state;
    }
}