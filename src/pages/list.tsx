import { useGetTodos } from "@/hooks/useGetTodos";
import Layout from '../components/layout';
//import { useQueryClient } from "react-query";
import Link from 'next/link';

const List = () => {
    const {todos} = useGetTodos();
    //const queryClient = useQueryClient()
    // const queryData = queryClient.getQueryData('todos');
    // console.log(queryData)

    return(
    <Layout headerName="Todo List" showButton={true}>
    <ul>
        {todos?.map((todo: any) => {
            return <span key={todo.id} className="flex"><li className="p-2.5" key={todo.id}>{todo.todo}</li>
            <Link href={`/${todo.id}`} className="underline border-stone-400 p-2.5">Edit</Link></span>
        })}
        </ul>
    </Layout>    
        );
}

export default List;
