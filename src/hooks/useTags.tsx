import { useEffect, useState } from 'react'

interface ITag{
    id: number;
    name: string;
}

export function useCategories(){
    const [tags, setTags] = useState<ITag[]>([])

    useEffect(() => {
        async function getTags(){
            const response = await fetch("http://localhost:8000/api/tags/all")
            const tags = await response.json();
            setTags(tags.data)
        }
        getTags()
    }, [])
    return { tags }

}