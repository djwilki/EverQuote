
import Cookies from 'js-cookie'
export const CREATE_USER = "signup/CREATE_USER";

const createUser = (user) => {
    return {
        type: CREATE_USER,
        user
    };
};


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


export default function usersReducer(state = {}, action) {
    switch (action.type) {
        case CREATE_USER:
            return action.user;
        default:
            return state;
    }
}