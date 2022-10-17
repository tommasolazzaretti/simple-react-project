import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../features/hooks";
import {GET_POSTS_LIST} from "../../features/post/postsAction";
import {postsList} from "../../features/post/postsSelectors";
import PostCard from "./PostCard";
import Loader from "./Loader";

const List: React.FC = () => {

    const dispatch = useAppDispatch();
    const {
        posts,
        pending,
        pagination
    } = useAppSelector(postsList);

    useEffect(() => {
        dispatch(GET_POSTS_LIST());
    }, []);

    let returnPostsList = () => {
        return pending ? <Loader/> : posts.map((post, index) => {
            return (
                <div key={`PostCard_div_${index}`} className={"col-12 col-md-6 col-lg-4 p-md-3"}>
                    <PostCard
                        key={`PostCard_${index}`}
                        text={post.text}
                        image={post.image}
                        publishDate={post.publishDate}
                        tags={post.tags}
                    />
                </div>
            )
        })
    }

    let paginationPages = () => {
        let elements: any[] = [];
        for (let i = 0; i < 5; i++) {
            elements.push(
                <li key={`li_${i}`} className="page-item">
                    <a key={`a_${i}`} className="page-link" href="#">{pagination.page + i}</a>
                </li>
            );
        }
        return elements;
    }

    return (
        <>
            <div className={"row"}>
                {returnPostsList()}
            </div>

            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <li className="page-item">
                        <a className="page-link" href="#" aria-label="Previous">
                            <span className="sr-only">First</span>
                        </a>
                    </li>
                    {
                        paginationPages()
                    }
                    <li className="page-item">
                        <a className="page-link" href="#" aria-label="Next">
                            <span className="sr-only">Last</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default List;