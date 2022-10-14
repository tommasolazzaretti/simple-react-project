import PostDetail from "../../global/model/Post";

export default interface PostDetailsState {
  post?: PostDetail,
  isFetching: boolean,
  fetchingProgressValue?: number,
  fetchingProgressMessage?: string,
  error?: string
}