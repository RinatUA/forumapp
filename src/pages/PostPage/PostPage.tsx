import { useParams } from "react-router-dom";
import "./PostPage.css"
import { useState } from "react"
import { usePostById } from "../../hooks/usePostById";

export function PostPage(){
    const params = useParams()
        
    const [likes, setLikes] = useState(0);
    const [liked, setLiked] = useState(false);
    const handleLike = () => {
        setLikes((prevLikes) => prevLikes + 1);
        setLiked(true);
    };

    const { post, isLoading } = usePostById(Number(params.id));
    
    return (
    <div className='post-page'>
        {isLoading ? (
            <div>
                <h1>Loading</h1>
            </div>
            ) : (
                <div>
                    <h1>пост №{params.id}</h1>
                    <h2>{post?.name}</h2>
                    <img src={post?.cover_image} alt={post?.name} className='cover-image'/>
                    <h2>Tags: {post?.tags}</h2>
                    <h2>{post?.body_markdown}</h2>
                    <button 
                        onClick={handleLike} 
                        disabled={liked}>
                        {liked ? 'Liked' : 'Like'}
                    </button>
                </div>
            )}
    </div>
    )
}