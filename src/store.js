import {createStore, applyMiddleware} from 'redux';
import {composeWithDevtools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reactReducer from './reducer';


const initialState = {};
const middleware = [thunk];
const store = createStore(reactReducer, initialState, composeWithDevtools(applyMiddleware(...middleware)));

export default store;