import PostsListState from "./PostsListState";
import PostDetailsState from "./PostDetailsState";

export default interface AppState {
  postsListState: PostsListState;
  postDetailsState: PostDetailsState;
}
