import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const GET_POSTS_LIST = createAsyncThunk('post/GET_POSTS_LIST', async (params: any) => {
    console.log('GET_POSTS_LIST params : ', params)
    const response = await axios.post("http://127.0.0.1:8080/getPost", {
        limit: params.pagination.limit,
        page: params.pagination.page,
    });
    return response.data;
});

export const GET_POST_DETAILS = createAsyncThunk('post/GET_POST_DETAILS', async (params) => {
    console.log('GET_POST_DETAILS params : ', params)
    const response = await axios.get("http://127.0.0.1:8080/getPost");
    return response.data;
});
