import { useState, useEffect } from "react";

const FetchPost = () => {
    const [post, setPost] = useState([]);

    // fetch the posts
    const posts = () => {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => response.json())
            .then(data => setPost(data))
    }
    
    useEffect(() => {
        posts();
    }, []);

    return Object.keys(post).length > 0 ? (
        <div>
            <ul>
                <li>{post.title}</li>
            </ul>
        </div>
    ) : (
        <h1>Data fetching...</h1>
    )
}

export default FetchPost