import * as TYPES from "../types";

const initState = {
  categoryList: [],
  tagList: [],
};

export default function articleReducer(state = initState, action) {
  const { type, payload } = action;
  switch (type) {
    case TYPES.ARTICLE_GET_TAG_LIST:
      const tagList = [];
      return { ...state, tagList };
    case TYPES.ARTICLE_GET_CATEGORRY_LIST:
      const categoryList = [];
      return { ...state, categoryList };
    default:
      return state;
  }
}
