import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../features/hooks";
import {DELETE_POST, GET_POSTS_LIST} from "../../features/post/postsAction";
import {postsList} from "../../features/post/postsSelectors";
import PostCard from "./PostCard";
import Loader from "./Loader";
import Modal from "./Modal";

const List: React.FC = () => {

    const dispatch = useAppDispatch();
    const {
        posts,
        pending,
        pagination,
        selectedId
    } = useAppSelector(postsList);
    const [openModal, setOpenModal] = useState(false);

    function callDeletePost() {
        dispatch(DELETE_POST({selectedId}));
        setOpenModal(false);
    }

    let callGetPosts = () => {
        dispatch(GET_POSTS_LIST({pagination}));
    }

    let setPage = (page: number) => {
        dispatch(GET_POSTS_LIST({
            ...pagination,
            page: page
        }));
    }

    useEffect(() => {
        callGetPosts();
    }, []);

    let returnPostsList = () => {
        return pending ? <Loader/> : posts.map((post, index) => {
            return (
                <div key={`PostCard_div_${index}`} className={"col-12 col-md-6 col-lg-4 p-md-3"}>
                    <PostCard
                        key={`PostCard_${index}`}
                        id={post.id}
                        text={post.text}
                        image={post.image}
                        publishDate={post.publishDate}
                        tags={post.tags}
                        deleteAction={() => setOpenModal(true)}
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
                    <a key={`a_${i}`} className="page-link" onClick={() => setPage(pagination.page + i)}>
                        {pagination.page + i + 1}
                    </a>
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
                        <a className="page-link" aria-label="Previous" onClick={() => setPage(0)}>
                            <span className="sr-only">First</span>
                        </a>
                    </li>
                    {
                        paginationPages()
                    }
                    <li className="page-item">
                        <a className="page-link" aria-label="Next" onClick={() => setPage(pagination.totalPages)}>
                            <span className="sr-only">Last</span>
                        </a>
                    </li>
                </ul>
            </nav>

            <Modal
                isOpen={openModal}
                onContinue={() => callDeletePost()}
                onClose={() => setOpenModal(false)}
            >
                Are you sure to delete item : {selectedId}
            </Modal>
        </>
    )
}

export default List;