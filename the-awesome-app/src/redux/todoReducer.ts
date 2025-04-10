import { TodoItem } from "../model/TodoItem";

type TodoState = {
    items: TodoItem [];
}

const initialState: TodoState = {
    items : [
        {id: 1, text: "Call Office", isCompleted: false},
        {id: 2, text: "Attend Seminar", isCompleted: false}
    ]
}

export const todoReducer = function(state=initialState, action){
    return state;
}