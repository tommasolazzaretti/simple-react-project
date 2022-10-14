import React from 'react';
import { connect } from 'react-redux';
import AppState from '../redux/state/AppState';
import { getPosts, searchPosts } from '../redux/actions/PostsListActionCreators';
import PostsListState from '../redux/state/PostsListState';
import PostDetailsState from '../redux/state/PostDetailsState';
import { GetPostDetails } from '../redux/actions/PostDetailsActionCreators';
import Header from "../global/UI/header.component";

interface Props {
    getPosts(): void,
    searchPosts(term: string): void,
    GetPostDetails(post: any): void,
    postsList: PostsListState,
    postDetails: PostDetailsState
}
interface State {
    isSelectedPostModalOpen: boolean
}
export class App extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = { isSelectedPostModalOpen: false };
    }

    componentDidMount = () => {
        if (this.props.postsList.posts.length === 0) {
            this.props.getPosts();
        }
    }

    onPostSelected = (post: any) => {
        this.openSelectedPostDialog();
        this.props.GetPostDetails(post);
    }

    openSelectedPostDialog = () => {
        this.setState({ isSelectedPostModalOpen: true });
    }

    closeSelectedCharacterDialog = () => {
        this.setState({ isSelectedPostModalOpen: false });
    }

    public render() {
        const { searchPosts, postsList, postDetails } = this.props;
        return (
            <div className="app-container">
                <Header/>

                COMPONENT HERE

            </div>
        );
    }
}

const mapStateToProps = (state: AppState) => {
    return {
        postsList: state.postsListState,
        postDetails: state.postDetailsState
    };
};

const mapDispatchToProps = (dispatch: Function) => {
    return {
        getPosts: () => dispatch(getPosts()),
        searchPosts: (term: string) => dispatch(searchPosts(term)),
        GetPostDetails: (post: any) => dispatch(GetPostDetails(post)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
