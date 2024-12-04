import {Post} from '../Post/Post';

interface IPostData {
    id: number;
    title: string;
    description: string;
    image: string;
    author: string;
}

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
];

export function PostList(props: IPostData) {
    return (
        <div style={{ textAlign: 'center', marginBottom: '20px' , backgroundColor: "#9CA6FC"}}>
            <div>
                <img src=""alt="CatRum Logo" style={{ borderRadius: '50%' }}/>
                <h2>Forum about cats</h2>
            </div>
                <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
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
