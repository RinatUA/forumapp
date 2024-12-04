import {Post} from '../Post/Post';
import "./PostList.css"

const posts = [
    {
        id: 1,
        title: 'шукаємо кота',
        description: 'шукаємо кота такий як на фото',
        image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.bbc.com%2Fukrainian%2Fnews-59415566&psig=AOvVaw3WfybypIQTVlYtkMVCwKzc&ust=1732517982222000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCIjX3suy9IkDFQAAAAAdAAAAABAE',
        author: 'John Doe',
    },
    {
        id: 2,
        title: 'знайшли кота',
        description: 'знайшли кота схожого як на цьому фото',
        image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.bbc.com%2Fukrainian%2Fnews-59415566&psig=AOvVaw3WfybypIQTVlYtkMVCwKzc&ust=1732517982222000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCIjX3suy9IkDFQAAAAAdAAAAABAE',
        author: 'Jane Smith',
    },
    {
        id: 3,
        title: 'куплю кота',
        description: 'куплю кота такого як на цьому фото',
        image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.bbc.com%2Fukrainian%2Fnews-59415566&psig=AOvVaw3WfybypIQTVlYtkMVCwKzc&ust=1732517982222000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCIjX3suy9IkDFQAAAAAdAAAAABAE',
        author: 'Alice Johnson',
    },
    // {
    //     id: 4,
    //     title: 'шукаємо кота',
    //     description: 'шукаємо кота такий як на фото',
    //     image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.bbc.com%2Fukrainian%2Fnews-59415566&psig=AOvVaw3WfybypIQTVlYtkMVCwKzc&ust=1732517982222000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCIjX3suy9IkDFQAAAAAdAAAAABAE',
    //     author: 'John Doe',
    // },
    // {
    //     id: 5,
    //     title: 'знайшли кота',
    //     description: 'знайшли кота схожого як на цьому фото',
    //     image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.bbc.com%2Fukrainian%2Fnews-59415566&psig=AOvVaw3WfybypIQTVlYtkMVCwKzc&ust=1732517982222000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCIjX3suy9IkDFQAAAAAdAAAAABAE',
    //     author: 'Jane Smith',
    // },
    // {
    //     id: 6,
    //     title: 'куплю кота',
    //     description: 'куплю кота такого як на цьому фото',
    //     image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.bbc.com%2Fukrainian%2Fnews-59415566&psig=AOvVaw3WfybypIQTVlYtkMVCwKzc&ust=1732517982222000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCIjX3suy9IkDFQAAAAAdAAAAABAE',
    //     author: 'Alice Johnson',
    // },
];

export function PostList() {
    return (
        <div id='PostList'>
            <div id = 'logo'>
                <img src="https://board.mur.tv/uploads/images/listings/ql/1/n93j5.jpg" alt="CatRum Logo"/>
                <h1>CatRum</h1>
                <h2>Forum about cats</h2>
            </div>
            <div id = "posts">
                {posts.map((post) => {
                    return (
                        <Post
                            key={post.id}
                            title={post.title}
                            description={post.description}
                            image={post.image}
                            author={post.author}></Post>
                        );
                    })}
            </div>
        </div>
    );
}
