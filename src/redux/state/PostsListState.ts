import PostDetail from "../../global/model/Post";

export default interface PostsListState {
  posts: PostDetail[],
  isFetching: boolean,
  error?: string
}
