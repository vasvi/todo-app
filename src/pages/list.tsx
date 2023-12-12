import { useGetTodos } from "@/hooks/useGetTodos";
import Layout from '../components/layout';

const List = () => {
    const {todos} = useGetTodos();

    return(
    <Layout headerName="Todo List" showButton={true}>
    <ul>
        {todos?.map((todo: any) => {
            return <li className="p-2.5" key={todo.id}>{todo.todo}</li>
        })}
        </ul>
    </Layout>    
        );
}

export default List;
