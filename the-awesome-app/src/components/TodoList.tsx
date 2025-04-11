import { ChangeEvent, useEffect } from "react";
import { TodoItem } from "../model/TodoItem";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, AppState } from "../redux/store";
import { fetchTodos, setCompleted } from "../redux/todoReducer";
import { Link } from "react-router-dom";

function TodoList(){

    // const [items, setItems] = useState<TodoItem[]>([
    //     {id: 1, text: "Call Office", isCompleted: false}
    // ])
    const items = useSelector((state: AppState) => state.todo.items);
    const status  = useSelector((state: AppState) => state.todo.status)
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {

        if(status === 'pending'){
            const action = fetchTodos();
            dispatch(action);
        }
       

    }, [])

    function handleCompleted(evt: ChangeEvent<HTMLInputElement>, item: TodoItem){

        const copy = {...item, isCompleted: evt.target.checked};
        const action = setCompleted(copy);
        dispatch(action);
    }

    return (
        <div>
            <h3>Todo List</h3>

            <div className="mb-3">
                <Link to="/todos/new" className="btn btn-primary">New Todo</Link>
            </div>

            <table className="table">
                <thead>
                    <tr>
                        <th>Item Id</th>
                        <th>Text</th>
                        <th>Completed</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.text}</td>    
                            <td> <input type="checkbox" checked={item.isCompleted} 
                                                onChange={(evt) => handleCompleted(evt, item) } /></td>        
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default TodoList;