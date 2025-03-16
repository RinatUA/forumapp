import { BrowserRouter, Routes, Route } from "react-router-dom"
import { PostPage } from "../pages/PostPage/PostPage"
import { PostListPage } from "../pages/PostListPage/PostListPage";
import { MainPage } from "../pages/MainPage/MainPage"
import { Layout } from "../shared/Layout/Layout";
import { LikedPage } from "../pages/LikedPage/LikedPage";
import { LoginPage } from "../pages/LoginPage/LoginPage";
import { RegisterPage } from "../pages/RegisterPage/RegisterPage"
import { UserPage } from "../pages/UserPage/UserPage";

export function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout></Layout>}>
                    <Route path="/" element={<MainPage></MainPage>}></Route>
                    <Route path="/posts" element={<PostListPage></PostListPage>}></Route>
                    <Route path="/post/:id" element={<PostPage></PostPage>}></Route>
                    <Route path="/liked" element ={<LikedPage></LikedPage>}></Route>
                    <Route path='/login' element={<LoginPage></LoginPage>}></Route>
                    <Route path='/register' element={<RegisterPage></RegisterPage>}></Route>
                    <Route path="/user" element = {<UserPage></UserPage>}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}