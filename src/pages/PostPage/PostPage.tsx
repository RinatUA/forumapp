import { useParams } from "react-router-dom";
import { usePostById } from "../../hooks/usePostById";

export function PostPage(){
    const params = useParams();
    const { post } = usePostById(Number(params.id)) 
    return <div className='post-page'>
        <h1>пост №{params.id}</h1>
        <h2>{post?.title}</h2>
        <img src={post?.cover_image} alt={post?.title} className='cover-image'/>
        <h2>Tags: {post?.tags}</h2>
        <h2>{post?.body_markdown}</h2>
    </div>
}