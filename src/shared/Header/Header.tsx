import "./Header.css"
import { Link } from "react-router-dom";

export function Header(){
    return (
        <header>
            <h1>CatRum</h1>
            <Link to={"/"}>
            <button>Main</button>
            </Link>

            <Link to={"/posts"}>
            <button>PostList</button>
            </Link>

            <input type="text" placeholder="Search..."/>
        </header>
    )
}