const posts = [
    {
        "title" : "Shocking news",
        "text" : "It was yesterday..."
    },
    {
        "title" : "Good news",
        "text" : "Baby tiger was born in the zoo."
    },
    {
        "title" : "3rd news",
        "text" : "tbd..."
    }
];

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
        console.log("Deleting post.");
        return state
    default:
        console.log("Default action");
        return state
    }
}
