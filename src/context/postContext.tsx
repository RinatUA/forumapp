import { createContext, ReactNode, useState } from "react";
import { IPost } from "../shared/types/types";
import { useContext } from "react";

interface IPostContext {
    likePosts: IPost[]; 
    toggleLike: (post: IPost) => void; 
    removePostLike: (id: number) => void; 
    isPostLiked: (id:number) => boolean;
}

const initialValue: IPostContext = {
    likePosts: [],
    toggleLike: (post: IPost) => {},
    removePostLike: () => {},
    isPostLiked: (id: number) => false,
}
// нет смысла экспортировать, ниже есть хук
export const likedContext = createContext<IPostContext>(initialValue)

export function useLikedContext() {
    return useContext(likedContext)
}

interface ILikeContextProviderProps{
    // children лучше сделать не обязательными 
    children: ReactNode
}

export function PostContextProvider(props: ILikeContextProviderProps){
    const { children } = props
    const [likePosts, setLikePosts] = useState<IPost[]>([])

    function addLikePost(post: IPost){
        let arr = [...likePosts, post]
        setLikePosts(arr)
    }
    function removePostLike(id: number){
        let arr = likePosts.filter((post) => {
            return post.id !== id
        })
        setLikePosts(arr)
    }
    
    function isPostLiked(id: number){
        for (let post of likePosts){
            if (post.id === id){
                return true;
            }
        }
        return false;
    }

    return(
        <likedContext.Provider value={{
            likePosts: likePosts, 
            toggleLike: addLikePost,
            removePostLike: removePostLike,
            isPostLiked: isPostLiked
            }}>
                {children   }
        </likedContext.Provider>
    )
}