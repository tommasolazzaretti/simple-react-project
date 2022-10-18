import PostDetail from "../../global/model/Post";
import css from '../../styles/PostCard.module.css';
import Link from "next/link";
import React from "react";
import {useAppDispatch} from "../../features/hooks";
import moment from "moment";
import {GET_POSTS_LIST, SET_SELECTED_POST_ID} from "../../features/post/postsAction";

interface PostCardProps extends Partial<PostDetail> {
    deleteAction: () => void
}

export default function PostCard({id, text, image, publishDate, tags, deleteAction}: PostCardProps) {

    const dispatch = useAppDispatch();

    let onDeleteAction = () => {
        dispatch(SET_SELECTED_POST_ID(id));
        deleteAction();
    }

    return (
        <>
            <div className={`card h-100 ${css.cardPost}`}>
                <picture>
                    <img className={`card-img-top ${css.cardImage}`} src={image} alt="image"/>
                </picture>
                <div className="card-body">
                    <p className="card-text">
                        {text}
                    </p>
                    <p className="card-text">
                        {moment(publishDate).format("MMM Do YY")}
                    </p>
                    <div className={css.chipsGroup}>
                        {
                            tags?.map(value => {
                                return <span key={value} className={css.chips}>{value}</span>
                            })
                        }
                    </div>
                    <div className={css.separator}></div>
                    <div className="row">
                        <button type="button" className="btn btn-warning col-12 col-md-3">
                            <Link href={`/postDetail?id=${id}`}>Update</Link>
                        </button>
                        <button
                            type="button" className="btn btn-danger col-12 col-md-3 offset-md-6"
                            onClick={() => onDeleteAction()}
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </>

    )
}