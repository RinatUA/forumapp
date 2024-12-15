import {Post} from '../Post/Post';
import "./PostList.css"
import { useEffect, useState } from "react"

const posts = [
    {
        id: 1,
        title: 'шукаємо кота',
        description: 'шукаємо кота такий як на фото',
        image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.bbc.com%2Fukrainian%2Fnews-59415566&psig=AOvVaw3WfybypIQTVlYtkMVCwKzc&ust=1732517982222000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCIjX3suy9IkDFQAAAAAdAAAAABAE',
        author: 'John Doe',
        category: 'Cats',
    },
    {
        id: 2,
        title: 'знайшли кота',
        description: 'знайшли кота схожого як на цьому фото',
        image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.bbc.com%2Fukrainian%2Fnews-59415566&psig=AOvVaw3WfybypIQTVlYtkMVCwKzc&ust=1732517982222000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCIjX3suy9IkDFQAAAAAdAAAAABAE',
        author: 'Jane Smith',
        category: 'Cats',
    },
    {
        id: 3,
        title: 'куплю кота',
        description: 'куплю кота такого як на цьому фото',
        image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.bbc.com%2Fukrainian%2Fnews-59415566&psig=AOvVaw3WfybypIQTVlYtkMVCwKzc&ust=1732517982222000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCIjX3suy9IkDFQAAAAAdAAAAABAE',
        author: 'Alice Johnson',
        category: 'Cats',
    },
    {
        id: 4,
        title: 'навчу пайтону за тиждень',
        description: 'і ви будете заробляти більше ніж я',
        image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.bbc.com%2Fukrainian%2Fnews-59415566&psig=AOvVaw3WfybypIQTVlYtkMVCwKzc&ust=1732517982222000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCIjX3suy9IkDFQAAAAAdAAAAABAE',
        author: 'John Doe',
        category: 'Programming'
    },
    {
        id: 5,
        title: 'кіт програмує на пітоні!',
        description: 'запишіться на мої курси і за тиждень ви вивчите пайтон',
        image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.bbc.com%2Fukrainian%2Fnews-59415566&psig=AOvVaw3WfybypIQTVlYtkMVCwKzc&ust=1732517982222000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCIjX3suy9IkDFQAAAAAdAAAAABAE',
        author: 'Jane Smith',
        category: 'Programming',
    },
    {
        id: 6,
        title: 'продам гараж',
        description: 'продам гараж',
        image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.bbc.com%2Fukrainian%2Fnews-59415566&psig=AOvVaw3WfybypIQTVlYtkMVCwKzc&ust=1732517982222000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCIjX3suy9IkDFQAAAAAdAAAAABAE',
        author: 'Alice Johnson',
        category: 'Selling',
    },
    {
        id: 7,
        title: 'якась крута ціпляюча назва',
        description: 'ще один пост з категорією інше бо я не придумав що тут написати(',
        image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.bbc.com%2Fukrainian%2Fnews-59415566&psig=AOvVaw3WfybypIQTVlYtkMVCwKzc&ust=1732517982222000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCIjX3suy9IkDFQAAAAAdAAAAABAE',
        author: 'Alice Johnson',
        category: 'Other',
    },
];

export function PostList() {
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
    }, [selectedCategory])

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
                        <Post key={post.id} id = {post.id} title={post.title} description={post.description} image={post.image} author={post.author}></Post>);
                    })}
            </div>
        </div>
    );
}
