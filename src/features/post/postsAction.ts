import { createAction } from "@reduxjs/toolkit"
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import BackendService from "../../services/BackendService";

export const GET_POSTS_LIST = createAsyncThunk('post/GET_POSTS_LIST', async () => {
    const response = await axios.get("http://127.0.0.1:8080/getPost", {
        headers: {
            'app-id': '634929d545ebdf36e1a19608'
        }
    });
    return response.data;
});
export const GET_POST_DETAILS = createAction('post/GET_POST_DETAILS')
