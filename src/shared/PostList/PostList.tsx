import { usePosts } from '../../hooks/usePosts';
import {Post} from './PostCard/Post';
import "./PostList.css"
import { useEffect, useState } from "react"

export function PostList() {
    // не забываем про обработку загрузки и ошибок 
    const {posts} = usePosts()

    const [filteredPosts, setFilteredPosts] = useState(posts)
    const [selectedCategory, setSelectedCategory] = useState('All')

    useEffect(()=>{
        if(selectedCategory === 'All'){
            setFilteredPosts(posts)
        } else{
            setFilteredPosts(posts.filter((post)=>{
                return post.category === selectedCategory
            }))
        }
        // в зависимости для useEffect лучше добавить posts, тк он используется в useEffect
    }, [selectedCategory])
    // Здесь этого не должно быть, должен использоватся хук
    useEffect(()=>{
        async function getPosts(){
            const response = await fetch('https://dev.to/api/articles')
            const posts = await response.json()
            setFilteredPosts(posts)
        }
        getPosts()
    },[])

    return (
        <div id='PostList'>
            <select id='categoryChange' onChange={(event)=>{setSelectedCategory(event.target.value)}}>
                {/* Все категории надо получать из Backend */}
                <option className='categoryOption' value = 'All'>All</option>
                <option className='categoryOption' value = 'Programming'>Programming</option>
                <option className='categoryOption' value = 'Cats'>Cats</option>
                <option className='categoryOption' value = 'Selling'>Selling</option>
                <option className='categoryOption' value = 'Other'>Other</option>
            </select>
            {/* <div id = 'logo'>
                <img src="https://board.mur.tv/uploads/images/listings/ql/1/n93j5.jpg" alt="CatRum Logo"/>
                <h1>CatRum</h1>
                <h2>Forum about cats</h2>
            </div> */}
            <div id = "posts">
                {filteredPosts.map((post) => {                                               
                    return (
                        <Post key={post.id} 
                        id = {post.id} 
                        name={post.name} 
                        description={post.description} 
                        image={post.image} 
                        author={post.author} 
                        category=''
                        ></Post>);
                    })}
            </div>
        </div>
    );
}
