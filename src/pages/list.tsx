import { useGetTodos } from "@/hooks/useGetTodos";
import { useDeleteTodo } from "@/hooks/useDeleteTodo";

import Layout from '../components/layout';

const List = () => {
    const {todos} = useGetTodos();

    const {mutate} = useDeleteTodo();

    return (
        <Layout headerName="Todo List" showButton={true}>
            <ul>
                {todos?.map((todo: any) => {
                    return <>
                        <li className="p-2.5" key={todo.id}>{todo.todo}</li>
                        <button onClick={()=>mutate(todo.id)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                            Delete</button>
                        </>
                })}
            </ul>
        </Layout>    
    );
}

export default List;
