import { Layout } from "./Layout/Layout"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { PostPage } from "../pages/PostPage/PostPage"
import { PostListPage } from "../pages/PostListPage/PostListPage";
import { MainPage } from "../pages/MainPage/MainPage"
import { createContext, useState } from "react";
import { IPost } from "../hooks/usePosts";  

export interface IPostProps {
    id: number;
    title: string;
    content: string;
    author: string;
    date: string;
}

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
export const likedContext = createContext<IPostContext>(initialValue)

export function App(){
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

    return (
        <div>
            <likedContext.Provider value={{
                likePosts: likePosts, 
                toggleLike: addLikePost,
                removePostLike: removePostLike,
                isPostLiked: isPostLiked
                }}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout></Layout>}>
                        <Route path="/" element={<MainPage></MainPage>}></Route>
                        <Route path="/posts" element={<PostListPage></PostListPage>}></Route>
                        <Route path="/post/:id" element={<PostPage></PostPage>}></Route>
                        <Route path="/post/:id" element={<PostPage></PostPage>}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
            </likedContext.Provider>
        </div>
    );
};  