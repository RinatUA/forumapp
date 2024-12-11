import { PostList } from "./PostList/PostList"
import { Layout } from "./Layout/Layout"
import { Header } from "./Header/Header"
import { Footer } from "./Footer/Footer"
import { Main} from './Main/Main'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { PostPage } from "./PostPage/PostPage"

export function App(){
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout></Layout>}>
                        <Route path="/PostList" element={<PostList></PostList>}></Route>
                        <Route path="/post/:id" element={<PostPage></PostPage>}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
};  