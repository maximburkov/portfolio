import { createStore } from 'redux';
import rootReducer from './reducers/index';

const posts = [
    {
        "title" : "Shocking news",
        "text" : "It was yesterday..."
    },
    {
        "title" : "Good news",
        "text" : "Baby tiger was born in the zoo."
    },
    {
        "title" : "3rd news",
        "text" : "tbd..."
    }
];

export default createStore(rootReducer, { posts }, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());