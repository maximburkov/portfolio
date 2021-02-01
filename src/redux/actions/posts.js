import { apiUrl } from  '../../common/Settings';

export const ADD_POST = "ADD_POST";
export const DELETE_POST = "DELETE_POST";
export const UPDATE_POST = "UPDATE_POST";
export const REQUEST_POSTS = "REQUEST_POSTS";
export const RECEIVE_POSTS = "RECEIVE_POSTS";

let nextId = 3;

export const addPost = payload => ({
    type: ADD_POST,
    payload
})

export const deletePost = id => ({
    type: DELETE_POST,
    payload: { id }
})

export const updatePost = payload => ({
    type: UPDATE_POST,
    payload : {...payload }
})

export const request = () => ({
    type: REQUEST_POSTS,
    });

export const receive = payload => ({
    type: RECEIVE_POSTS,
    payload
    });

export function fetchPosts() {
    return async function (dispatch) {
      dispatch(request());
      const response = await fetch(`${apiUrl}/post`);
      const data = await response.json();
      console.log(data);
      dispatch(receive(data));
    };
   }

   export function addPostAsync(payload) {
    return async function (dispatch) {
      const response = await fetch(`${apiUrl}/post`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });
      debugger;
      const data = await response.json();
      console.log(data);
      dispatch(addPost(data));
    };
   }
