interface IPostProps {
    title: string;
    description: string;
    image: string;
    author: string;
}

export function Post(props:IPostProps){
    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <img src={props.image} alt={props.title} />
            <p>Author:{props.author}</p>
        </div>
    )
}