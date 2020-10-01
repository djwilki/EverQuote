import Cookies from 'js-cookie'


export const SEND_NOTEBOOKS = "getNotebooks/SEND_NOTEBOOKS";


const sendUserNotebooks = (notebooks) => {
    return {
        type: SEND_NOTEBOOKS,
        notebooks
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
            dispatch(sendUserNotebooks(res.data));  
        }
        return res;
    }
}

export default function notebooksReducer(state = {}, action) {
    console.log(action);
    switch (action.type) {
        case SEND_NOTEBOOKS:
            return action.notebooks;
        default:
            return state;
    }
}