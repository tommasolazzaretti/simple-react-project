import PostDetail from "../../global/model/Post";

export enum PostActionTypes {

  GET_POSTS_LIST_START = 'GET_POSTS_LIST_START',
  GET_POSTS_LIST_SUCCESS = 'GET_POSTS_LIST_SUCCESS',
  GET_POSTS_LIST_FAILURE = 'GET_POSTS_LIST_FAILURE',

  GET_POST_DETAILS_START = 'GET_POST_DETAILS_START',
  GET_POST_DETAILS_PROGRESS = 'GET_POST_DETAILS_PROGRESS',
  GET_POST_DETAILS_SUCCESS = 'GET_POST_DETAILS_SUCCESS',
  GET_POST_DETAILS_FAILURE = 'GET_POST_DETAILS_FAILURE'
}

export interface GetPostsListStartAction {
  type: PostActionTypes.GET_POSTS_LIST_START,
}

export interface GetPostsListSuccessAction {
  type: PostActionTypes.GET_POSTS_LIST_SUCCESS,
  posts: PostDetail[]
}

export interface GetPostsListFailureAction {
  type: PostActionTypes.GET_POSTS_LIST_FAILURE,
  error: string
}

export interface GetPostDetailsStartAction {
  type: PostActionTypes.GET_POST_DETAILS_START,
  id: string
}

export interface GetPostDetailsSuccessAction {
  type: PostActionTypes.GET_POST_DETAILS_SUCCESS,
  postDetails: PostDetail
}

export interface GetPostDetailsProgressAction {
  type: PostActionTypes.GET_POST_DETAILS_PROGRESS,
  value: number,
  message: string
}

export interface GetPostDetailsFailureAction {
  type: PostActionTypes.GET_POST_DETAILS_FAILURE,
  error: string
}

export type PostsListActions =
  GetPostsListStartAction
  | GetPostsListSuccessAction
  | GetPostsListFailureAction;

export type PostDetailsActions =
  GetPostDetailsStartAction
  | GetPostDetailsProgressAction
  | GetPostDetailsSuccessAction
  | GetPostDetailsFailureAction;