import { LOGIN, LOGOUT, RESET_ERROR } from '../actions/users';

const initialState = {
    // this is only for test purposes.
    isLoggedIn: false,
    users: [
        {
            login: 'admin',
            password: 'admin',
            IsAdmin: true
        },
        {
            login: 'guest',
            password: 'guest',
            IsAdmin: false
        },
        {
            login: 'guest2',
            password: 'guest2',
            IsAdmin: false
        }
    ]
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
    case LOGIN:
        console.log('Logged in...');
        const user = state.users.find(u => u.login === payload.login && u.password === payload.password);

        if(user === undefined){
            return { ...state, isLoggedIn : false, isLoginError : true }
        }
        else{
            return { ...state, user, isLoggedIn : true, isLoginError : false }
        }
    case LOGOUT:
        console.log('Logged out...');
        return { ...state, isLoggedIn : false }
    case RESET_ERROR:
        return { ...state, isLoginError: false }
    default:
        return state
    }
}
