import { useGetTodos } from "@/hooks/useGetTodos";
import { useDeleteTodo } from "@/hooks/useDeleteTodo";

import Layout from '../components/layout';
//import { useQueryClient } from "react-query";
import Link from 'next/link';

const List = () => {
    const {todos} = useGetTodos();
    const {mutate} = useDeleteTodo();
    //const queryClient = useQueryClient()
    // const queryData = queryClient.getQueryData('todos');
    // console.log(queryData)

    return(
    <Layout headerName="Todo List" showButton={true}>
    <ul>
        {todos?.map((todo: any) => {
            return <span key={todo.id} className="flex"><li className="p-2.5" key={todo.id}>{todo.todo}</li>
            <Link href={`/${todo.id}`} className="underline border-stone-400 p-2.5">Edit</Link>
            <button onClick={()=>mutate(todo.id)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                            Delete</button>
            </span>
        })}
        </ul>
    </Layout>    
        );
}

export default List;
