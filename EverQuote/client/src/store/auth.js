import Cookies from 'js-cookie';

const SET_USER = 'auth/SET_USER';

export const setUser = user => {
    return {
        type: SET_USER,
        user
    }
};

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
        console.log(res);
        res.data = await res.json();

        if (res.ok) {
            dispatch(setUser(res.data.user));
        }
        return res
    }
};

export default function authReducer(state = {}, action) {
    switch (action.type) {
        case SET_USER:
            return action.user;
        default:
            return state;
    }
};