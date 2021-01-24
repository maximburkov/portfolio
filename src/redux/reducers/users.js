const initialState = {
    // this is only for test purposes.
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
    switch (type) {

    case "TEST":
        return { ...state, ...payload }

    default:
        return state
    }
}
