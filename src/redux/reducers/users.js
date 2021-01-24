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
        console.log('Logged in...');
        return { ...state, isLoggedIn : true }
    case LOGOUT:
        console.log('Logged out...');
        return { ...state, isLoggedIn : false }
    default:
        return state
    }
}
