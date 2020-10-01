import Cookies from 'js-cookie'

export const CREATE_USER = "signup/CREATE_USER";
export const SEND_NOTEBOOKS = "getNotebooks/SEND_NOTEBOOKS";

const createUser = (user) => {
    return {
        type: CREATE_USER,
        user
    };
};

const sendNotebooks = () => {
    return {
        type: SEND_NOTEBOOKS
    }
}



export const signup = (username, email, password) => {
    const csrfToken = Cookies.get('XSRF-TOKEN');
    return async dispatch => {
        const res = await fetch('/api/users/', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFTOKEN': csrfToken
            },
            body: JSON.stringify({ username, password, email, "csrf_token": csrfToken })
        });
        const data = await res.json();
        res.data = data;
        if (res.ok) {
            dispatch(createUser(data));
            return res;
        } else {
            console.error('Bad response');
            return res;
        }
    }
};

export const getNotebooks = (id) => {
    // const csrfToken = Cookies.get('XSRF-TOKEN');
    return async dispatch => {
        const res = await fetch('/api/users/' + id + '/notebooks', {
            method: 'GET',
            // headers: {
            //     'X-CSRFTOKEN': csrfToken
            // },
        });
        const data = await res.json();
        res.data = data;
        if (res.ok) {
            dispatch(sendNotebooks(data));
            return res;
        } else {
            console.error('Bad response');
            return res;
        }
    }
}

export default function usersReducer(state = {}, action) {
    switch (action.type) {
        case CREATE_USER:
            return action.user;
        case SEND_NOTEBOOKS:
            return action.notebooks;
        default:
            return state;
    }
}