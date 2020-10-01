import Cookies from 'js-cookie';

const SET_USER = 'session/SET_USER';
const LOGOUT_USER = 'session/LOGOUT_USER';
const SET_SELECTED_NOTEBOOK = 'session/SET_SELECTED_NOTEBOOK';
const SET_NOTE_LIST = "session/SET_NOTE_LIST";
const SET_ACTIVE_NOTE = "session/SET_ACTIVE_NOTE";

export const setSelectedNotebook = (notebookId) => {
    return {
        type: SET_SELECTED_NOTEBOOK,
        notebookId
    };
}

export const setActiveNote = (noteId) => {
    return {
        type: SET_ACTIVE_NOTE,
        noteId
    }
}

export const setUser = user => {
    return {
        type: SET_USER,
        user
    }
};

export const logoutUser = () => {
    return {
        type: LOGOUT_USER
    }
}

export const login = (email_or_username, password) => {
    const csrfToken = Cookies.get('XSRF-TOKEN');
    return async dispatch => {
        const res = await fetch('/api/session/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFTOKEN': csrfToken
            },
            body: JSON.stringify({ email_or_username, password, "csrf_token": csrfToken })
        });
        res.data = await res.json();

        if (res.ok) {
            dispatch(setUser(res.data.user));
        }
        return res
    }
};

export const logout = () => {
    const csrfToken = Cookies.get("XSRF-TOKEN");
    return async dispatch => {
        const res = await fetch('/api/session/logout', {
            method: "DELETE",
            headers: {
                "X-CSRFTOKEN": csrfToken
            }
        })

        res.data = await res.json();

        if (res.ok) {
            dispatch(logoutUser());
        }
        return res;
    }
}

const initialSessionState = {
    user_id: null,
    selectedNotebookId: null,
    noteList: null,
    activeNote: null
}

export default function sessionReducer(state = initialSessionState, action) {
    const newState = Object.assign({}, state);
    switch (action.type) {
        case SET_USER:
            newState.user_id = action.user.user_id;
            return newState;
        case LOGOUT_USER:
            newState.user_id = null;
            return newState;
        case SET_SELECTED_NOTEBOOK:
            newState.selectedNotebookId = action.notebookId;
            return newState;
        case SET_NOTE_LIST:
            newState.noteList = action.noteList;
            return newState;
        case SET_ACTIVE_NOTE:
            newState.activeNote = action.noteId;
            return newState;
        default:
            return state;
    }
};