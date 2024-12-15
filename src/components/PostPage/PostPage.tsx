import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import './PostPage.css';

export function PostPage(){
    const params = useParams();
    const [post, setPost] = useState({
        title: '',
        cover_image: '',
        tags: [],
        body_markdown: '',
      });
      useEffect(() => {
        const fetchPost = async () => {
            const response = await fetch(`https://dev.to/api/articles/${params.id}`);
            const data = await response.json();
            setPost({
              title: data.title,
              cover_image: data.cover_image,
              tags: data.tag_list,
              body_markdown: data.body_markdown
            });

        };
    
        if (params.id) {
          fetchPost();
        }
      }, [params.id]);
    
    return <div className='post-page'>
        <h1>пост №{params.id}</h1>
        <h2>{post.title}</h2>
        <img src={post.cover_image} alt={post.title} className='cover-image'/>
        <h2>Tags: {post.tags}</h2>
        <h2>{post.body_markdown}</h2>
    </div>
}