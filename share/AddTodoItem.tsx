
import { useDispatch } from "react-redux";
import { addItem } from "../redux/todoReducer";
function AddTodoItem() {

    const dispatch = useDispatch();

    function save() {
         const action = addItem({id: 10, text: "Book Cab", isCompleted: false});
         dispatch(action);
    }

    return (
        <div>
            <h4>New TodoItem</h4>

            <div className="form-group mb-3">
                <label htmlFor="id">Id</label>
                <input type="number" className="form-control" />
            </div>
            <div className="form-group mb-3">
                <label htmlFor="text">Text</label>
                <input type="text" className="form-control" />
            </div>
            <div>
                <button className="btn btn-success" onClick={save}>Save</button>
            </div>
        </div>
    );
}

export default AddTodoItem;