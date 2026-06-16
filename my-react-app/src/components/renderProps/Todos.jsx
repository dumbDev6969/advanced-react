import FetchData from "./DataFetcher";

const Todos = () => {
    return (
        <FetchData 
            url="https://jsonplaceholder.typicode.com/todos"
            render={(todos) => (
                <ul>
                    { todos.map((todo) => <li key={todo.key}>{ todo.title }</li> )}
                </ul>
            )}
        />
    );
}
export default Todos