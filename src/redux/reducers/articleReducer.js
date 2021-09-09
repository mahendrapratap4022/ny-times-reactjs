import { Action } from '../constants';

const init = {
  articles: [],
};
export const articleReducer = (state = init, { type, payload }) => {
  switch (type) {
    case Action.SET_PRODUCTS:
      return { ...state, articles: payload };
    default:
      return state;
  }
};

export const selectedArticlesReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case Action.SELECTED_PRODUCT:
      return { ...state, ...payload };
    case Action.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};
