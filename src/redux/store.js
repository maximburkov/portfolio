import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './reducers/index';
import thunk from 'redux-thunk';

const posts = [];
const users = ['fuck'];

const initialState = {
    posts : {
        posts
    }
};

export default createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));