import { useGetTodos } from "@/hooks/useGetTodos";

const List = () => {
    const {todos} = useGetTodos();

    return(<ul>
        {todos?.map((todo: any) => {
            return <li className="p-2.5" key={todo.id}>{todo.todo}</li>
        })}
        </ul>);
}

export default List;
