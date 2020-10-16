import { PostActionTypes } from "./post.types";
import axios from "axios";

export const getPosts = (data) => {
  return async (dispatch) => {
    let res = await axios.get("https://pavel-blog-api.herokuapp.com/posts");
    dispatch({
      type: PostActionTypes.GET_POSTS,
      payload: res.data,
    });
  };
};

export const createPost = (data) => {
  return async (dispatch) => {
    let res = await axios.post(
      "https://pavel-blog-api.herokuapp.com/posts",
      data
    );
    dispatch({
      type: PostActionTypes.CREATE_POSTS,
      payload: res.data,
    });
  };
};
