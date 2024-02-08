import { useState, useEffect } from 'react';
import PhotoPost from './PhotoPost';

const Gallery = () => {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) => res.json())
        .then((posts) => {
            setPosts(posts)
        })
        .catch((error) => console.log(error.message))
        .finally(() => setIsLoading(true))
    }, [])

    return (
        <>
            <h1>Posts</h1>
            <hr />
            {isLoading ? <h1>Loading...</h1> : posts.map((post) => 
                <PhotoPost key={post.id} {...post}/>)}
            
        </>
    )
}

export default Gallery;