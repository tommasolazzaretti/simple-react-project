import { createSelector } from '@reduxjs/toolkit';
import {RootState} from "../store";

export const postsList = (state: RootState) => state.postsList;

export const postsSelector = createSelector(postsList, state => state);