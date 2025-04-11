
import { useDispatch } from "react-redux";
import { addItem } from "../redux/todoReducer";
import { useRef } from "react";

function AddTodoItem() {

    const dispatch = useDispatch();
    const idRef = useRef<HTMLInputElement>(null);
    const textRef = useRef<HTMLInputElement>(null);


    function save() {

        const id = idRef.current?.value;
        const text = textRef.current?.value;

        if(id && text){

            const action = addItem({id: Number(id), text, isCompleted: false});
            dispatch(action);

        }
    }

    return (
        <div>
            <h4>New TodoItem</h4>

            <div className="form-group mb-3">
                <label htmlFor="id">Id</label>
                <input type="number" className="form-control" ref={idRef}/>
            </div>
            <div className="form-group mb-3">
                <label htmlFor="text">Text</label>
                <input type="text" className="form-control" ref={textRef}/>
            </div>
            <div>
                <button className="btn btn-success" onClick={save}>Save</button>
            </div>
        </div>
    );
}

export default AddTodoItem;