import { Dispatch } from 'redux';
import {
  GetPostsListStartAction,
  GetPostsListSuccessAction,
  GetPostsListFailureAction,
  PostActionTypes
} from './PostssActions';
import PostDetail from "../../global/model/Post";

export const getPostsStart = (): GetPostsListStartAction => {
  return {
    type: PostActionTypes.GET_POSTS_LIST_START
  };
}

export const getPostsSuccess = (results: PostDetail[]): GetPostsListSuccessAction => {
  return {
    type: PostActionTypes.GET_POSTS_LIST_SUCCESS,
    posts: results
  };
}

export const getPostsFailure = (error: string): GetPostsListFailureAction => {
  return {
    type: PostActionTypes.GET_POSTS_LIST_FAILURE,
    error: error
  };
}

export const getPosts = () => {
  return (dispatch: Dispatch) => {

    dispatch(getPostsStart());

    // return new CALL_TO_BACKEND_API()
    //   .getPosts()
    //   .then((response) => dispatch(getPostsSuccess(response.data.results)))
    //   .catch((error) => dispatch(getPostsFailure('Could not get posts: ' + error.message)));
  };
};

export const searchPosts = (term: string) => {
  return (dispatch: Dispatch) => {

    dispatch(getPostsStart());
    // return new CALL_TO_BACKEND_API()
    //   .getPost(term)
    //   .then((response) => dispatch(getPostsSuccess(response.data.results)))
    //   .catch((error) => dispatch(getPostsFailure('Could not search for posts: ' + error.message)));
  };
};
