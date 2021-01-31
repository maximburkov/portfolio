import { LOGIN, LOGOUT, RESET_ERROR } from '../actions/users';

let user = JSON.parse(localStorage.getItem('user'));

const initialState = {
    // this is only for test purposes.
    user,
    isLoggedIn: user ? true : false,
    users: [
        {
            login: 'admin',
            password: 'admin',
            isAdmin: true
        },
        {
            login: 'guest',
            password: 'guest',
            isAdmin: false
        },
        {
            login: 'guest2',
            password: 'guest2',
            isAdmin: false
        }
    ]
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
    case LOGIN:
        const user = state.users.find(u => u.login === payload.login && u.password === payload.password);

        if(user === undefined){
            return { ...state, isLoggedIn : false, isLoginError : true }
        }
        else{
            localStorage.setItem('user', JSON.stringify(user));
            return { ...state, user, isLoggedIn : true, isLoginError : false }
        }
    case LOGOUT:
        localStorage.removeItem('user');
        return { ...state, isLoggedIn : false, user: null }
    case RESET_ERROR:
        return { ...state, isLoginError: false }
    default:
        return state
    }
}
