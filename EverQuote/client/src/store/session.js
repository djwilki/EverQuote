import Cookies from 'js-cookie';

const SET_USER = 'auth/SET_USER';
const LOGOUT_USER = '/auth/LOGOUT_USER';
const SET_SELECTED_NOTEBOOK = '/ui/SET_SELECTED_NOTEBOOK';
const SET_DEFAULT_NOTEBOOK = 'notebooks/SET_DEFAULT_NOTEBOOK'


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

export const setSelectedNotebook = (notebookId) => {
    return {
        type: SET_SELECTED_NOTEBOOK,
        notebookId
    };
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
    defaultNotebookId: null
}

export default function sessionReducer(state = initialSessionState, action) {
    console.log(action)
    switch (action.type) {
        case SET_USER:
            const stateCopy = Object.assign({}, state);
            stateCopy.user_id = action.user.user_id;
            return stateCopy;
        case LOGOUT_USER:
            return { user_id: null };
        case SET_SELECTED_NOTEBOOK:
            const newState = Object.assign({}, state);
            newState.selectedNotebookId = action.notebookId;
            return newState;
        case SET_DEFAULT_NOTEBOOK:
            console.log("please")
            const altState = Object.assign({}, state);
            altState.defaultNotebookId = action.defaultNotebookId;
            return altState;
        default:
            return state;
    }
};