let nextId = 3;

export const addPost = payload => ({
    type: "ADD",
    payload : {...payload, id: ++nextId }
})

export const deletePost = id => ({
    type: "DELETE",
    payload: { id }
})
