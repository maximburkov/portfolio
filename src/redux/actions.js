import { ApiService } from "../api/ApiService";

let nextId = 3;

export const addPost = payload => ({
    type: "ADD",
    payload : {...payload, id: ++nextId }
})

export const deletePost = id => ({
    type: "DELETE",
    payload: { id }
})

export const updatePost = payload => ({
    type: "UPDATE",
    payload : {...payload }
})

export async const fetchPosts = payload => ({
    type: "UPDATE",
    payload : {...payload }
})
