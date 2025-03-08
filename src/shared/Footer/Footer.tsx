import { Link } from "react-router-dom"
import "./Footer.css"

export function Footer(){
    return(
        <footer>
            <p>якась юридична інформація для дуже розумних людей з моноклем біля ока почитати замість книги</p>
            <button><Link to = "https://github.com/RinatUA/forumapp/tree/master"></Link></button>
        </footer>

    )
    
}