import Cookies from 'js-cookie';

const ADD_NOTE = '/notes/ADD_NOTE';

export const setNote = note => {
    return {
        type: ADD_NOTE,
        note
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
        default:
            return state;
    }
}