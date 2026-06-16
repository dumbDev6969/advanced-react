import FetchData from "./DataFetcher";

const Posts = () => {
    return (
        <FetchData 
            url="https://jsonplaceholder.typicode.com/posts"
            render={(posts) => (
                <ul>
                    { posts.map((post) => <li key={post.id}>{ post.title } | { post.body }</li>)}
                </ul>
            )}
        />
    )
}

export default Posts