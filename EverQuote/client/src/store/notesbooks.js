import Cookies from 'js-cookie'


export const SET_NOTEBOOKS = "notebooks/SET_NOTEBOOKS";
export const ADD_NOTESBOOK = "notebooks/ADD_NOTEBOOK"


const setUserNotebooks = (notebooks) => {
    return {
        type: SEND_NOTEBOOKS,
        notebooks
    }
}

const addUserNotebooks = (notebook) => {
    return {
        type: ADD_NOTEBOOK,
        notebook
    }
}


export const getUserNotebooks = id => {
    const path = `/api/users/${id}/notebooks`;
    return async dispatch => {
        const res = await fetch(path);
        const data = await res.json();
        res.data = data;
        console.log(res);
        if (res.ok) {
            dispatch(setUserNotebooks(res.data));
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
            dispatch(addUserNotebook(res.data));
        }
        return res;
    }
}

export default function notebooksReducer(state = {}, action) {
    console.log(action);
    switch (action.type) {
        case SET_NOTEBOOKS:
            return action.notebooks;
        default:
            return state;
    }
}