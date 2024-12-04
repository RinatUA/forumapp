import "./Header.css"

export function Header(){
    return (
        <header>
            <h1>CatRum</h1>
            <button>Post</button>
            <button>PostList</button>
            <input type="text" placeholder="Search..."/>
        </header>
    )
}