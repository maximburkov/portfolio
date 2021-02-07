import { ADD_POST, DELETE_POST, UPDATE_POST, RECEIVE_POSTS, REQUEST_POSTS } from '../actions/posts'

const initialState = {
    posts: []
}

export default (state = initialState, action) => {
    switch (action.type) {
    case ADD_POST: 
        const newPost = action.payload;
        return { ...state, posts : [...state.posts, newPost] };
    case DELETE_POST:
        const id = action.payload.id
        return { ...state, posts: state.posts.filter(p => p.id !== id) };
    case UPDATE_POST:
        const updatedPost = action.payload;
        return { 
            ...state, 
            posts: state.posts.map(item => item.id == updatedPost.id ? updatedPost : item) 
        };
    case REQUEST_POSTS:
        return state;
    case RECEIVE_POSTS:
        return {...state, posts: action.payload };
    default:
        return state
    }
}
