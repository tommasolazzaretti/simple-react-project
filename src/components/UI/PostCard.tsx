import PostDetail from "../../global/model/Post";
import css from '../../styles/PostCard.module.css';
import Link from "next/link";

export default function PostCard({id, text, image, publishDate, tags}: Partial<PostDetail>) {
    return (
        <div className={`card h-100 ${css.cardPost}`}>
            <picture>
                <img className={`card-img-top ${css.cardImage}`} src={image} alt="image"/>
            </picture>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                    {text}
                </p>
                <p className="card-text">
                    {publishDate}
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
                    <button type="button" className="btn btn-danger col-12 col-md-3 offset-md-6">Delete</button>
                </div>
            </div>
        </div>
    )
}