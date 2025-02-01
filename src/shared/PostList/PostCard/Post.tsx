import { useContext, useEffect, useState } from "react";
import "./Post.css"
import { Link } from "react-router-dom"
import { IPost } from "../../../hooks/usePosts";
import { likedContext } from "../../../context/postContext";

interface IPostProps {
    id: number;
    title: string;
    social_image: string;
    description?: string;
    tags?: string;
    body_markdown?: string;
}

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
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <h3>Author: {props.author}</h3>
            <img src={props.image} alt={props.title} />
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
