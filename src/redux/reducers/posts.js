import { ADD_POST, DELETE_POST, UPDATE_POST, RECEIVE_POSTS, REQUEST_POSTS } from '../actions/posts'

const initialState = {
    posts: []
}

export default (state = initialState, action) => {
    switch (action.type) {
    case ADD_POST: 
        const newPost = action.payload;
        console.log("Adding new post.");
        console.log(action.payload);
        return { ...state, posts : [...state.posts, newPost] };
    case DELETE_POST:
        const id = action.payload.id
        console.log(`delete post with id: ${id}`);
        return { ...state, posts: state.posts.filter(p => p.id !== id) };
    case UPDATE_POST:
        const updatedPost = action.payload;
        return { 
            ...state, 
            posts: state.posts.map(item => item.id == updatedPost.id ? updatedPost : item) 
        };
    case REQUEST_POSTS:
        console.log('Reducer: request');
        return state;
    case RECEIVE_POSTS:
        console.log('Reducer: receive');
        return {...state, posts: action.payload };
    default:
        console.log("Default action");
        return state
    }
}
