export const ADD_POST = "ADD_POST";
export const DELETE_POST = "DELETE_POST";
export const UPDATE_POST = "UPDATE_POST";
export const REQUEST_POSTS = "REQUEST_POSTS";
export const RECEIVE_POSTS = "RECEIVE_POSTS";

let nextId = 3;

export const addPost = payload => ({
    type: ADD_POST,
    payload : {...payload, id: ++nextId }
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
      const response = await fetch('http://localhost:57727/api/post');
      const data = await response.json();
      console.log(data);
      dispatch(receive(data));
    };
   }


  function TestPromiseFunc(x) {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log(`x in settimeout: ${x}`);
        resolve(x + '!');
      }, 2000);
    });
}


// export async const fetchPosts = payload => ({
//     type: "UPDATE",
//     payload : {...payload }
// })
