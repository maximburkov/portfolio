import { createStore } from 'redux';
import rootReducer from './reducers/index';

const posts = [
    {
        "title" : "Shocking news",
        "text" : "It was yesterday..."
    },
    {
        "title" : "Good news",
        "text" : "It's good."
    },
    {
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