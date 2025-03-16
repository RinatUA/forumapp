import { useUserContext } from "../../context/userContext";
import "./Header.css"
import { Link } from "react-router-dom";
export function Header(){
    const {isAuthenticated} = useUserContext()
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
            {isAuthenticated() ? 
            <Link to = {'/user'}>User Profile</Link>
            :
            <>
                <Link to = {'/login'}>Login</Link>
                <Link to = {'/register'}>Register</Link>
            </>
            }
        </header>
    )
}