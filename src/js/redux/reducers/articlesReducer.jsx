import { ADD_ARTICLE, LOAD_ARTICLE } from '../constants/action-types';

const initialState = {
  articles: [
    { id: 1, title: 'item 1' },
    { id: 2, title: 'item 2' },
  ],
};
const articlesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      return { ...state, articles: [...state.articles, action.payload] };
    case LOAD_ARTICLE:
      return { ...state, articles: [...state.articles, ...action.payload] };
    default:
      return state;
  }
};

export default articlesReducer;
