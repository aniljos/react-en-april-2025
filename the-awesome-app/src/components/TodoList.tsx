import { useState } from "react";
import { TodoItem } from "../model/TodoItem";
import { useSelector } from "react-redux";
import { AppState } from "../redux/store";

function TodoList(){

    // const [items, setItems] = useState<TodoItem[]>([
    //     {id: 1, text: "Call Office", isCompleted: false}
    // ])
    const items = useSelector((state: AppState) => state.todo.items);

    return (
        <div>
            <h3>Todo List</h3>

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
                            <td> <input type="checkbox" checked={item.isCompleted} /></td>        
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default TodoList;