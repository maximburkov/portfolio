export const addPost = payload => ({
    type: "ADD",
    payload
})

export const deletePost = id => ({
    type: "DELETE",
    id
})
