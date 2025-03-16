export interface IPost{
    id: number,
    name: string,
    description: string,
    image: string,
    author: string,
    category: string,
    cover_image?: any,
    tags?: string,
    body_markdown?: string,
}

export interface ISuccess<T> {
    status: 'success'
    data: T
}

export interface IError {
    status: 'error'
    message: string
}

export interface IUser {
    id: number
    name: string
    email: string
    password: string
    role: "user" | "admin"
}

export interface ITag {
    id: number
    name: string
    posts: IPost[]
}

export type Response<T> = IError | ISuccess<T>