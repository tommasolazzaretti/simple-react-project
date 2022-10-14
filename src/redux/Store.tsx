import {applyMiddleware, combineReducers, createStore, Store, AnyAction} from 'redux';
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension';
import AppState from './state/AppState';
import PostsListReducer from './reducers/PostsListReducer';
import PostDetailsReducer from './reducers/PostDetailsReducer';

const rootReducer = combineReducers<AppState>({
    postsListState: PostsListReducer,
    postDetailsState: PostDetailsReducer
    // TODO: add sub-reducers here...
});

export default function configureStore(): Store<AppState, AnyAction> {
  return createStore(rootReducer, undefined, composeWithDevTools(applyMiddleware(thunk)));
}
