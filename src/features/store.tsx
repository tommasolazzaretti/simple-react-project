import {Action, configureStore, ThunkAction,} from '@reduxjs/toolkit';
import {postReducer} from "./post/postsReducer";

export const store = configureStore({
    reducer: {
        postsList: postReducer
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
    RootState,
    unknown,
    Action<string>>;