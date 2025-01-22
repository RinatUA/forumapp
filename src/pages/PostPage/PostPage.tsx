import { useParams } from "react-router-dom";
import "./PostPage.css"
import { useEffect, useState } from "react"

export function PostPage(){
    const [post, setPost] = useState({
        id: 0,
        title: "",
        cover_image: "",
        tags: [],
        body_markdown: "",
    })
    const params = useParams()
    const [isLoading, setIsLoading] = useState(true)
        
    const [likes, setLikes] = useState(0);
    const [liked, setLiked] = useState(false);
    const handleLike = () => {
        setLikes((prevLikes) => prevLikes + 1);
        setLiked(true);
    };

    useEffect(() => {
        async function getAllPosts() {
            setIsLoading(true)
            const response = await fetch(`https://dev.to/api/articles/${params.id}`)
            const post = await response.json()
            setPost(post)
            setIsLoading(false)
        }
        getAllPosts()
    }, [params.id])
    
    return (
    <div className='post-page'>
        {isLoading ? (
            <div>
                <h1>Loading</h1>
            </div>
            ) : (
                <div>
                    <h1>пост №{params.id}</h1>
                    <h2>{post?.title}</h2>
                    <img src={post?.cover_image} alt={post?.title} className='cover-image'/>
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