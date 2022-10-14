import { Reducer } from 'redux';
import { PostActionTypes, PostDetailsActions } from '../actions/PostssActions';
import PostDetailsState from '../state/PostDetailsState';
import PostDetail from "../../global/model/Post";

const initialState: PostDetailsState = {
  isFetching: false
};
const PostDetailsReducer: Reducer<PostDetailsState, PostDetailsActions> = (state = initialState, action: PostDetailsActions) => {
  
  switch (action.type) {
    case PostActionTypes.GET_POST_DETAILS_START: {
      return {
        ...state,
        isFetching: true,
        post: {
          id: action.id,
        } as PostDetail
      };
    }
    case PostActionTypes.GET_POST_DETAILS_PROGRESS: {
      return {
        ...state,
        isFetching: true,
        fetchingProgressValue: action.value,
        fetchingProgressMessage: action.message
      };
    }
    case PostActionTypes.GET_POST_DETAILS_SUCCESS: {
      return {
        ...state,
        post: action.postDetails,
        isFetching: false        
      };
    }
    case PostActionTypes.GET_POST_DETAILS_FAILURE: {
      return {
        ...state,        
        isFetching: false,
        error: action.error
      };
    }
    default: return state;
  }
};

export default PostDetailsReducer;
