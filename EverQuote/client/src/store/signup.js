import Cookies from 'js-cookie'

export const CREATE_USER = "signup/CREATE_USER";

// const createUser = (user) => {
const createUser = (username, email, password) => {
    return {
        type: CREATE_USER,
        user: {username, email, password}
    };
};

export const signup = (username, email, password) => {
    const csrfToken = Cookies.get('XSRF-TOKEN');
    return async dispatch => {
        const res = await fetch('/api/users', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'XSRF-TOKEN': csrfToken
            },
            body: JSON.stringify({ username, password, email })
        });
        if (res.ok) {
            const data = await res.json();
            dispatch(createUser(data));
            res.data = data;
            return res;
        } else {
            console.error('Bad response');
        }
    }
};

export default function signupReducer(state = {}, action) {
    console.log(action);
    switch (action.type) {
        case CREATE_USER:
            return action.user;
        default:
            return state;
    }
}