import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const GET_POSTS_LIST = createAsyncThunk('post/GET_POSTS_LIST', async (params: any) => {
    const response = await axios.post(`${process.env.API_URL}/getPost`, {
        limit: params.pagination.limit,
        page: params.pagination.page,
    });
    return response.data;
});

export const GET_POST_DETAILS = createAsyncThunk('post/GET_POST_DETAILS', async (params) => {
    const response = await axios.post(`${process.env.API_URL}/getPost`);
    return response.data;
});

export const CREATE_POST = createAsyncThunk('post/CREATE_POST', async (params) => {
    const response = await axios.post(`${process.env.API_URL}/createPost`, params);
    return response.data;
});

export const UPDATE_POST = createAsyncThunk('post/UPDATE_POST', async (params) => {
    const response = await axios.post(`${process.env.API_URL}/updatePost`, params);
    return response.data;
});

export const DELETE_POST = createAsyncThunk('post/DELETE_POST', async (params) => {
    const response = await axios.post(`${process.env.API_URL}/deletePost`, params);
    return response.data;
});
