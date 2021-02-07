import { ADD_COMMENT, RECEIVE_COMMENTS, REQUEST_COMMENTS } from "../actions/comments";

const initialState = {
    comments: []
}
export default (state = initialState, action) => {
    switch (action.type) {
    case ADD_COMMENT: 
        const newComment = action.payload;
        return { ...state, comments : [...state.comments, newComment] };
    case REQUEST_COMMENTS:
        return state;
    case RECEIVE_COMMENTS:
        return {...state, comments: action.payload };
    default:
        return state
    }
}
