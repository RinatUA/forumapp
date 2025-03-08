import { useState, useEffect } from 'react'
import { IPost } from '../shared/types/types'

export function usePostById(id: number) {
    const [post, setPost] = useState<IPost>()
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        async function getPost() {
            const response = await fetch(`https://dev.to/api/articles/${id}`)
            const post = await response.json()
            setPost(post)
        }
        getPost()
    }, [id])

    return { post: post, isLoading }
}
