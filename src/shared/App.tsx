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
}

const initialValue: IPostContext = {
    likePosts: [],
    toggleLike: (post: IPost) => {}
}
const likedContext = createContext<IPostContext>(initialValue)

export function App(){
    const [likePosts, setLikePosts] = useState<IPost[]>([])

  function addLikePost(post: IPost){
      let arr = [...likePosts, post]
      setLikePosts(arr)
  }
    return (
        <div>
            <likedContext.Provider value={{likePosts: likePosts, toggleLike: addLikePost}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout></Layout>}>
                        <Route path="/" element={<MainPage></MainPage>}></Route>
                        <Route path="/posts" element={<PostListPage></PostListPage>}></Route>
                        <Route path="/post/:id" element={<PostPage></PostPage>}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
            </likedContext.Provider>
        </div>
    );
};  