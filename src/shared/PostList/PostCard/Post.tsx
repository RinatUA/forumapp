import { useContext, useEffect, useState } from "react";
import "./Post.css"
import { Link } from "react-router-dom"
import { IPost } from "../../../hooks/usePosts";
import { likedContext } from "../../../context/postContext";
import { IPostProps } from "../../types/types"

export function Post(props: IPost) {
    const {likePosts, toggleLike} = useContext(likedContext)
    const isPostLiked = likePosts.some((post) => post.id === props.id);
    const [likes, setLikes] = useState(0);
    const [liked, setLiked] = useState(false);

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
                <p>Likes: {likes}</p>
                <button 
                    onClick={handleLike}>
                    {isPostLiked ? 'Liked' : 'Like'}
                </button>
                <Link to={`/post/${props.id}`}><button>перейти</button></Link>                
            </div>
        </div>
    );
}
