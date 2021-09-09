import { combineReducers } from 'redux';
import { selectedArticlesReducer, articleReducer } from './articleReducer';

const reducers = combineReducers({
  allArticles: articleReducer,
  article: selectedArticlesReducer,
});

export default reducers;
