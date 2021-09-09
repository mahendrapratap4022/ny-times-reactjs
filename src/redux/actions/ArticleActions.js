import { Action } from '../constants';

export const setArticles = (articles) => {
  return {
    type: Action.SET_PRODUCTS,
    payload: articles,
  };
};

export const selectedArticle = (article) => {
  return {
    type: Action.SELECTED_PRODUCT,
    payload: article,
  };
};

export const removeSelectedArticle = () => {
  return {
    type: Action.REMOVE_SELECTED_PRODUCT,
  };
};
