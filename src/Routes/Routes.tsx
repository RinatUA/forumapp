import { BrowserRouter, Routes, Route } from "react-router-dom"
import { PostPage } from "../pages/PostPage/PostPage"
import { PostListPage } from "../pages/PostListPage/PostListPage";
import { MainPage } from "../pages/MainPage/MainPage"
import { Layout } from "../shared/Layout/Layout";
import { LikedPage } from "../pages/LikedPage/LikedPage";


export function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout></Layout>}>
                    <Route path="/" element={<MainPage></MainPage>}></Route>
                    <Route path="/posts" element={<PostListPage></PostListPage>}></Route>
                    <Route path="/post/:id" element={<PostPage></PostPage>}></Route>
                    <Route path="/post/:id" element={<PostPage></PostPage>}></Route>
                    <Route path="/liked" element ={<LikedPage></LikedPage>}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}