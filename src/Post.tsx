import { useState } from "react";

interface IPostProps {
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
        <div>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <img src={props.image} alt={props.title} />
            <p>Author: {props.author}</p>
            <div>
                <p>Likes: {likes}</p>
                <button 
                    onClick={handleLike} 
                    disabled={liked}>
                    {liked ? 'Liked' : 'Like'}
                </button>
            </div>
        </div>
    );
}
