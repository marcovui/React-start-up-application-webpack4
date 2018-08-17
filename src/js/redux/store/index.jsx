// src/js/store/index.js
import { createStore, applyMiddleware } from 'redux';
// import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';

function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(/* reduxImmutableStateInvariant(), */ thunkMiddleware)
  );
}

/*
const store = createStore(
  rootReducer,

);
*/

export default configureStore;