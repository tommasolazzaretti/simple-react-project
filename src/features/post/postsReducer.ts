import {createReducer} from '@reduxjs/toolkit';
import PostDetail from "../../global/model/Post";
import {GET_POST_DETAILS, GET_POSTS_LIST} from "./postsAction";
import Pagination from "../../global/model/Pagination";

// declaring the types for our state
export type PostsListState = {
    posts: PostDetail[];
    postDetail: PostDetail | null;
    pagination: Pagination;
    pending: boolean;
    error: boolean;
};

const initialState: PostsListState = {
    posts: [],
    postDetail: null,
    pagination: {
        page: 0,
        total: 0,
        limit: 15,
        totalPages: 0
    },
    pending: false,
    error: false,
};

export const postReducer = createReducer(initialState, builder => {
    builder
        .addCase(GET_POSTS_LIST.pending, state => {
            state.pending = true;
        })
        .addCase(GET_POSTS_LIST.fulfilled, (state, {payload}) => {
            state.pending = false;
            state.posts = payload.data;
            state.pagination = {
                page: payload.page,
                total: payload.total,
                limit: payload.limit,
                totalPages: Math.floor(payload.total / payload.limit)
            };
        })
        .addCase(GET_POSTS_LIST.rejected, state => {
            state.pending = false;
            state.error = true;
        })
        .addCase(GET_POST_DETAILS.pending, state => {
            state.pending = true;
        })
        .addCase(GET_POST_DETAILS.fulfilled, (state, {payload}) => {
            state.pending = false;
            state.postDetail = payload.data;
        })
        .addCase(GET_POST_DETAILS.rejected, state => {
            state.pending = false;
            state.error = true;
        })
});