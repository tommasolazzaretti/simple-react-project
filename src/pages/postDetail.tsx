import type {NextPage} from 'next'
import {useAppDispatch, useAppSelector} from "../features/hooks";
import {postsList} from "../features/post/postsSelectors";
import React, {useEffect} from "react";
import {GET_POST_DETAILS} from "../features/post/postsAction";
import {useRouter} from "next/router";

const PostDetail: NextPage = () => {

    const dispatch = useAppDispatch();
    const router = useRouter();
    const id: string = router.query.id as string

    const {
        postDetail
    } = useAppSelector(postsList);

    useEffect(() => {
        if (id && id !== '0') dispatch(GET_POST_DETAILS());
    }, []);

    let getTitle = () => {
        console.log("id : ", id)
        return id && id !== '0' ? 'UPDATE POST' : 'CREATE NEW POST'
    }

    return (
        <div className="container">
            <h2>
                {getTitle()}
            </h2>
            <form>
                <div className="form-group py-md-5">
                    <label htmlFor="validationText">Text :</label>
                    <input type="text" className="form-control" id="validationText" placeholder="insert description"
                           value="" required/>
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                    <div className="invalid-feedback">
                        Please choose a username.
                    </div>

                    <button className="btn btn-primary mt-3" type="submit">Submit form</button>
                </div>
            </form>
        </div>
    )
}

export default PostDetail