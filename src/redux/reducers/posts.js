const initialState = {
    posts: []
}

export default (state = initialState, action) => {
    switch (action.type) {

    case "ADD":
        console.log("Adding new post.");
        debugger;
        return state
    case "DELETE":
        console.log("Deleting post.");
        return state
    default:
        console.log("Default action");
        return state
    }
}
