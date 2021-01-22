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

export const request = () => ({
    type: "REQUEST",
    });

export const receive = payload => ({
    type: "RECEIVE",
    payload
    });

export function asyncOperation() {
    return async function (dispatch) {
      dispatch(request());
      const response = await fetch('http://localhost:57727/api/post');
      const data = await response.json();
      console.log(data);
      dispatch(receive());
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
