import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './reducers/index';
import thunk from 'redux-thunk';

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

export default createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));