import PostDetail from "../../global/model/Post";
import css from '../../styles/PostCard.module.css';

export default function PostCard({text, image, publishDate, tags}: Partial<PostDetail>) {
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
                <p className="card-text">
                    {tags}
                </p>
            </div>
        </div>
    )
}