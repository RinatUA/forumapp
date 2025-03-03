// Импорт не используется, нужно убрать
import { useContext, useEffect, useState } from "react";
import "./Post.css"
// Нужно использовать хук вместо импортирования самого контекста
import { likedContext } from "../../../context/postContext";
import { IPost } from "../../types/types";
import { Link } from 'react-router';

export function Post(props: IPost) {
    const {likePosts, toggleLike} = useContext(likedContext)
    const isPostLiked = likePosts.some((post) => post.id === props.id);
    // Здесь это не надо, если добавлять лайкам функции, тогда нужно записывать это в интерфейс поста и добавлять в модель на backend
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
                {/* button зачем? */}
                <Link to={`/post/${props.id}`}><button>перейти</button></Link>                
            </div>
        </div>
    );
}
