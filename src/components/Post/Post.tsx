import { useState } from "react";
import "./Post.css"
import { Link } from "react-router-dom"

interface IPostProps {
    id: number;
    title: string;
    description: string;
    image: string;
    author: string;
}

export function Post(props: IPostProps) {
    const [likes, setLikes] = useState(0);
    const [liked, setLiked] = useState(false);

    const handleLike = () => {
        setLikes((prevLikes) => prevLikes + 1);
        setLiked(true);
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
                    onClick={handleLike} 
                    disabled={liked}>
                    {liked ? 'Liked' : 'Like'}
                </button>
                
                <Link to={`/post/${props.id}`}><button>перейти</button></Link>
            </div>
        </div>
    );
}
