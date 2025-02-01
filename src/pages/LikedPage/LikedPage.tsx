import { useContext } from "react";
import { likedContext } from "../../context/postContext";

export function LikedPage(){
    const {likePosts, removePostLike} = useContext(likedContext)
    return (
        <div>
            {likePosts.map(post =>{
                return <div>
                    <h1>{post.title}</h1>
                    <p>{post.description}</p>
                    <img src={post.image} alt="" />
                    <button onClick={()=>{removePostLike(post.id)}}>Remove like</button>
                </div>
            })}
        </div>
    )
}

/*export interface IPost{
    id: number,
    title: string,
    description: string,
    image: string,
    author: string,
    category: string,
    cover_image?: any,
    tags?: string,
    body_markdown?: string,
}
*/