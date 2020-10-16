import { PostActionTypes } from "../actions/post.types";

const INITIAL_STATE = {
  allPosts: [],
};

const postReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PostActionTypes.GET_POSTS:
      return {
        ...state,
        allPosts: action.payload,
      };
    case PostActionTypes.CREATE_POSTS:
      return {
        ...state,
        allPosts: [...state.allPosts, action.payload],
      };
    default:
      return state;
  }
};

export default postReducer;
