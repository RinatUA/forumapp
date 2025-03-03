import { useState, useEffect } from 'react'
import { IPost } from '../shared/types/types'
// Этот хук нужно использовать!
export function usePostById(id: number) {
    const [post, setPost] = useState<IPost>()
    // Loading, error

    useEffect(() => {
        async function getPost() {
            // try...catch
            const response = await fetch(`https://dev.to/api/articles/${id}`)
            const post = await response.json()
            setPost(post)
        }
        getPost()
    }, [id])

    return { post: post }
}
