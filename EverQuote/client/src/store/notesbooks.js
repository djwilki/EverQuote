import Cookies from 'js-cookie'


export const SET_NOTEBOOKS = "notebooks/SET_NOTEBOOKS";
export const ADD_NOTEBOOK = "notebooks/ADD_NOTEBOOK";
export const EDIT_NOTEBOOK = "notebooks/EDIT_NOTEBOOK";
export const SET_DEFAULT_NOTEBOOK = "notebooks/SET_DEFAULT_NOTEBOOK";
const LOGOUT_USER = 'session/LOGOUT_USER';


const setNotebooks = (notebooks) => {
    return {
        type: SET_NOTEBOOKS,
        notebooks
    }
}

const addNotebook = (notebook) => {
    return {
        type: ADD_NOTEBOOK,
        notebook
    }
}

const editNotebook = (notebook) => {
    return {
        type: EDIT_NOTEBOOK,
        notebook
    }
}

export const setDefaultNotebook = (defaultNotebookId) => {
    return {
        type: SET_DEFAULT_NOTEBOOK,
        defaultNotebookId
    }
}



export const setUserNotebooks = id => {
    const path = `/api/users/${id}/notebooks`;
    return async dispatch => {
        const res = await fetch(path);
        res.data = await res.json();
        console.log("reducer", res);
        if (res.ok) {
            dispatch(setNotebooks(res.data));
            Object.values(res.data).forEach(ele => {
                if (ele.isDefault) {
                    dispatch(setDefaultNotebook(ele.id))
                }
            })
        }
        return res;
    }
}

export const addUserNotebooks = (title, isDefault, userId) => {
    const csrfToken = Cookies.get('XSRF-TOKEN');
    const path = `api/users/${userId}/notebooks`;
    return async dispatch => {
        const res = await fetch(path, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFTOKEN': csrfToken
            },
            body: JSON.stringify({ title, isDefault, userId, "csrf_token": csrfToken })
        });
        const data = await res.json();
        res.data = data;
        if (res.ok) {
            dispatch(addNotebook(res.data));
        }
        return res;
    }
}

export const editUserNotebooks = (title, isDefault, userId) => {
    const csrfToken = Cookies.get('XSRF-TOKEN');
    const path = `api/users/${userId}/notebooks`;
    return async dispatch => {
        const res = await fetch(path, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFTOKEN': csrfToken
            },
            body: JSON.stringify({ title, isDefault, userId, "csrf_token": csrfToken })
        });
        const data = await res.json();
        res.data = data;
        if (res.ok) {
            dispatch(editNotebook(res.data));
        }
        return res;
    }
}

export default function notebooksReducer(state = {}, action) {
    console.log(action);
    switch (action.type) {
        case SET_NOTEBOOKS:
            return action.notebooks;
        case ADD_NOTEBOOK:
            return action.notebook;
        case EDIT_NOTEBOOK:
            return action.notebook;
        case LOGOUT_USER:
            return {};
        default:
            return state;
    }
}