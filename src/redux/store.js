import { createStore } from 'redux';
import rootReducer from './reducers/index';

const posts = [
    {
        "id" : 1,
        "title" : "Shocking news",
        "text" : "It was yesterday..."
    },
    {
        "id" : 2,
        "title" : "Good news",
        "text" : "It's good."
    },
    {
        "id" : 3,
        "title" : "3rd news",
        "text" : "tbd..."
    }
];

const initialState = {
    posts : {
        posts
    }
};

export default createStore(rootReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());