const initialState = {
    posts: []
}

export default (state = initialState, action) => {
    switch (action.type) {

    case "ADD": 
        const newPost = action.payload;
        console.log("Adding new post.");
        console.log(action.payload);
        return { ...state, posts : [...state.posts, newPost] };
    case "DELETE":
        const id = action.payload.id
        console.log(`delete post with id: ${id}`);
        return { ...state, posts: state.posts.filter(p => p.id !== id) }
    default:
        console.log("Default action");
        return state
    }
}
