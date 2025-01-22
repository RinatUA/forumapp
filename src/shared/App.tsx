import { Layout } from "./Layout/Layout"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { PostPage } from "../pages/PostPage/PostPage"
import { PostListPage } from "../pages/PostListPage/PostListPage";
import { MainPage } from "../pages/MainPage/MainPage"
import { createContext } from "react"

interface ILikedPosts{
    title: string
}

const initialValue: ILikedPosts[] = []
const likedContext = createContext< ILikedPosts[] >(initialValue)

export function App(){
    return (
        <div>
            <likedContext.Provider value={[{title:'пупупупу...'}]}>
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