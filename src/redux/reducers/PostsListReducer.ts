import { Reducer } from 'redux';
import PostsListState from '../state/PostsListState';
import { PostActionTypes, PostsListActions } from '../actions/PostssActions';

const initialState: PostsListState = {
  posts: [],
  isFetching: false
};
const PostsListReducer: Reducer<PostsListState, PostsListActions> = (state = initialState, action: PostsListActions) => {

  switch (action.type) {
    case PostActionTypes.GET_POSTS_LIST_START: {
      return {
        ...state,
        isFetching: true
      };
    }
    case PostActionTypes.GET_POSTS_LIST_SUCCESS: {
      return {
        ...state,
        posts: action.posts,
        isFetching: false
      };
    }
    case PostActionTypes.GET_POSTS_LIST_FAILURE: {
      return {
        ...state,
        isFetching: false,
        error: action.error
      };
    }
    default: return state;
  }
};

export default PostsListReducer;
