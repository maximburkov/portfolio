import { LOGIN, LOGOUT } from '../actions/users';

const initialState = {
    // this is only for test purposes.
    isLoggedIn: false,
    users: [
        {
            login: 'Admin',
            password: 'Admin',
            IsAdmin: true
        },
        {
            login: 'Guest',
            password: 'Guest',
            IsAdmin: false
        },
        {
            login: 'Guest_2',
            password: 'Guest_2',
            IsAdmin: false
        }
    ]
}

export default (state = initialState, { type, payload }) => {
    debugger;
    switch (type) {

    case LOGIN:
        debugger;
        console.log('Logged in...');
        const user = state.users.find(u => u.login === payload.login && u.password === payload.password);

        if(user === undefined){
            return { ...state, isLoggedIn : true, isLoginError : true }
        }
        else{
            return { ...state, user, isLoggedIn : false }
        }
    case LOGOUT:
        console.log('Logged out...');
        return { ...state, isLoggedIn : false }
    default:
        return state
    }
}
