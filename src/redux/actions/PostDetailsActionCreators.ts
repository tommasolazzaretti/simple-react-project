import { Dispatch } from 'redux';
import {
  PostActionTypes,
  GetPostDetailsStartAction,
  GetPostDetailsSuccessAction,
  GetPostDetailsFailureAction,
  GetPostDetailsProgressAction
} from './PostssActions';
import PostDetail from "../../global/model/Post";

export const GetPostDetailsStart = (id: string): GetPostDetailsStartAction => {
  return {
    type: PostActionTypes.GET_POST_DETAILS_START,
    id: id
  };
}

export const GetPostDetailsSuccess = (postDetails: PostDetail): GetPostDetailsSuccessAction => {
  return {
    type: PostActionTypes.GET_POST_DETAILS_SUCCESS,
    postDetails: postDetails
  };
}

export const GetPostDetailsFailure = (error: string): GetPostDetailsFailureAction => {
  return {
    type: PostActionTypes.GET_POST_DETAILS_FAILURE,
    error: error
  };
}

export const GetPostDetailsProgress = (value: number, message: string): GetPostDetailsProgressAction => {
  return {
    type: PostActionTypes.GET_POST_DETAILS_PROGRESS,
    value: value,
    message: message
  };
}

export const GetPostDetails = (id: string) => {
  return async (dispatch: Dispatch) => {

    // API CALL

    dispatch(GetPostDetailsStart(id));
    dispatch(GetPostDetailsProgress(10, `Loading info...`));

    try {

    }
    catch (e: any) {
      dispatch(GetPostDetailsFailure(`Could not load any post with id:${id} - ${e.message}`));
      return;
    }
  };
};

