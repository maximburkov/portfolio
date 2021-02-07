const initialState = {
    comments: [
        {
            id: '123',
            postId: '',
            text: 'Cool',
            authorLogin: 'guest',
            dateCreated: Date.now()
        },
        {
            id: '124',
            postId: '',
            text: 'Thank you!',
            authorLogin: 'admin',
            dateCreated: Date.now()
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
