import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../features/hooks";
import {GET_POSTS_LIST} from "../../features/post/postsAction";
import {postsList} from "../../features/post/postsSelectors";
import PostCard from "./PostCard";

const List: React.FC = () => {

    const dispatch = useAppDispatch();
    const {
        posts,
        postDetail,
        pagination
    } = useAppSelector(postsList);

    useEffect(() => {
        dispatch(GET_POSTS_LIST());
    }, []);

    let returnPostsList = () => {
        let blockHTML: any[] = [];

        posts.map((post, index) => {
        })

        return blockHTML;
    }

    return (
        <>
            <div className={"row"}>
                {posts.map((post, index) => {
                    return (
                        <div key={index} className={"col-12 col-md-6 col-lg-4 p-md-3"}>
                            <PostCard
                                text={post.text}
                                image={post.image}
                                publishDate={post.publishDate}
                                tags={post.tags}
                            />
                        </div>
                    )
                })}
            </div>

            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <li className="page-item">
                        <a className="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                            <span className="sr-only">Previous</span>
                        </a>
                    </li>
                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item">
                        <a className="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                            <span className="sr-only">Next</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default List;