import { combineReducers } from 'redux';
import articlesReducer from './articlesReducer';

const rootReducer = combineReducers({
  articlesReducer,
});

export default rootReducer;