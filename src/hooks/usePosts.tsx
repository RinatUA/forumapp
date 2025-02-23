import { useEffect, useState } from "react"
import { IPost } from "../shared/types/types";

export function usePosts(){
    const [posts, setPosts] = useState<IPost[]>([])

    useEffect(()=>{
        async function getPosts(){
            const response = await fetch(`https://dev.to/api/articles/`);
            const posts = await response.json()
            setPosts(posts)
        }
        getPosts()
        
    },[])
    return {posts: posts}
}