import {Post} from './Post';

export function App(){
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
    interface IPostData {
        id: number;
        title: string;
        description: string;
        image: string;
        author: string;
    }
    return (
        <div>
            <h1>forum</h1>
            <p>some desc</p>
            <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.sheba.pl%2Fblog%2Fzywienie%2Fco-moze-jesc-kot-produkty-ktore-smialo-mozesz-wcielic-do-jego-diety&psig=AOvVaw29zDgMn0wvaAHnli1FvVw3&ust=1732168224742000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKCM79Ob6okDFQAAAAAdAAAAABAJ" alt="photo"/>
                {posts.map((post) => {
            return <Post key={post.id} title={post.title} description={post.description} image={post.image} author={post.author}></Post>})}
        </div>
    );
};  