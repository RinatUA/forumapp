export function Header(){
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', backgroundColor: "505FE9"}}>
            <h1>CatRum</h1>
            <div>
                <button>Post</button>
                <button>PostList</button>
            </div>
        <input type="text" placeholder="Search..." style={{ padding: '5px' }} />
        </div>
    )
}