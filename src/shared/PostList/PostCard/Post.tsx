import "./Post.css"
import { useLikedContext } from "../../../context/postContext";
import { IPost } from "../../types/types";

export function Post(props: IPost) {
    const {likePosts, toggleLike} = useLikedContext()
    const isPostLiked = likePosts.some((post) => post.id === props.id);

    const handleLike = () => {
        toggleLike(props); 
    };

    return (
        <div className = "post">
            <h1>{props.name}</h1>
            <p>{props.description}</p>
            <h3>Author: {props.author}</h3>
            <img src={props.image} alt={props.name} />
            <div>
                <button 
                    onClick={handleLike}>
                    {isPostLiked ? 'Liked' : 'Like'}
                </button>
            </div>
        </div>
    );
}
