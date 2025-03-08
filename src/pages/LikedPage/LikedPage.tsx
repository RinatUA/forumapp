import { useLikedContext } from "../../context/postContext";

export function LikedPage(){
    const {likePosts, removePostLike} = useLikedContext()
    return (
        <div>
            {likePosts.map(post =>{
                return <div>
                    <h1>{post.name}</h1>
                    <p>{post.description}</p>
                    <img src={post.image} alt="" />
                    <button onClick={()=>{removePostLike(post.id)}}>Remove like</button>
                </div>
            })}
        </div>
    )
}
