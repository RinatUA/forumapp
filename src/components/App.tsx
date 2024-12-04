import { PostList } from "./PostList/PostList"
import { Layout } from "./Layout/Layout"
import { Header } from "./Header/Header"
import { Footer } from "./Footer/Footer"

export function App(){
    return (
        <div>
            <Layout>
                <Header></Header>
                <PostList id={0} title={''} description={''} image={''} author={''}></PostList>
                <Footer></Footer>
            </Layout>
        </div>
    );
};  