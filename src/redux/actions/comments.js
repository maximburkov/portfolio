import { apiUrl } from  '../../common/Settings';

export const ADD_COMMENT = "ADD_COMMENT";
export const REQUEST_COMMENTS = "REQUEST_COMMENTS";
export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";

export const addComment = payload => ({
    type: ADD_COMMENT,
    payload
})

export const request = () => ({
    type: REQUEST_COMMENTS,
    });

export const receive = payload => ({
    type: RECEIVE_COMMENTS,
    payload
    });

export function fetchComments() {
    return async function (dispatch) {
      dispatch(request());
      const response = await fetch(`${apiUrl}/comment`);
      const data = await response.json();
      console.log(data);
      dispatch(receive(data));
    };
   }

   export function addCommentAsync(payload) {
    return async function (dispatch) {
      const response = await fetch(`${apiUrl}/comment`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });
      const data = await response.json();
      console.log(data);
      dispatch(addComment(data));
    };
   }
