import axios from "axios";
import {urlConstants} from '@/urlConstants'

const getTodos = async ()=>{
    try{
        const {data} = await axios.get(urlConstants.GET_TODOS);
        
        return data;
    }
    catch(e){
        console.log(e);
    }
}

export const todoService = {
    getTodos
}

// class TodoService {
//     getAllTodos() {
//         return axios.get("https://jsonplaceholder.typicode.com/posts");
//     }
// }

// export const todoService = new TodoService();