import { usePosts } from '../../hooks/usePosts';
import { useCategories } from '../../hooks/useTags';
import { Post } from './PostCard/Post';
import "./PostList.css"
import { useEffect, useState } from "react"

export function PostList() {
    const {posts} = usePosts()

    const [filteredPosts, setFilteredPosts] = useState(posts)
    const [selectedCategory, setSelectedCategory] = useState('All')
    const { tags } = useCategories();
    useEffect(()=>{
        if(selectedCategory === 'All'){
            setFilteredPosts(posts)
        } else{
            setFilteredPosts(posts.filter((post)=>{
                return post.category === selectedCategory
            }))
        }
    }, [selectedCategory])

    usePosts()

    return (
        <div id='PostList'>
            <select id='categoryChange' onChange={(event)=>{setSelectedCategory(event.target.value)}}>
                <option className='categoryOption' value = 'All'>All</option>
                {tags.map((tag) => (
                    <option key={tag.name} value={tag.name}>
                        {tag.name}
                    </option>
                ))}
            </select>

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
