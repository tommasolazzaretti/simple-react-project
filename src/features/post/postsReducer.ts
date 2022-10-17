import { createReducer } from '@reduxjs/toolkit';
import PostDetail from "../../global/model/Post";
import {GET_POSTS_LIST, GET_POST_DETAILS} from "./postsAction";
import BackendService from "../../services/BackendService";

// declaring the types for our state
export type PostsListState = {
    posts: PostDetail[];
    postDetail: PostDetail | null;
    pagination: any;
    pending: boolean;
    error: boolean;
};

const initialState: PostsListState = {
    posts: [],
    postDetail: null,
    pagination: {},
    pending: false,
    error: false,
};

export const postReducer = createReducer(initialState, builder => {
    builder
        .addCase(GET_POSTS_LIST.pending, state => {
            state.pending = true;
        })
        .addCase(GET_POSTS_LIST.fulfilled, (state, { payload }) => {
            state.pending = false;
            state.posts = payload.data;
            state.pagination = payload.pagination;
        })
        .addCase(GET_POSTS_LIST.rejected, state => {
            state.pending = false;
            state.error = true;
        })
        .addCase(GET_POST_DETAILS, state => {
            state.postDetail = state.postDetail;
        })
});