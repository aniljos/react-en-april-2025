import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TodoItem } from "../model/TodoItem";
import axios from "axios";

type TodoState = {
    items: TodoItem [];
    status : 'pending' | 'completed' | 'failed'
}

const initialState: TodoState = {
    items : [
        // {id: 1, text: "Call Office", isCompleted: false},
        // {id: 2, text: "Attend Seminar", isCompleted: false}
    ],
    status: 'pending'
}

//action {type: "addItem", payload: TodoItem}
// export const todoReducer = function(state=initialState, action){

//     if(action.type === "addItem" && action.payload){

//         //state.items.push(action.payload);
//         const items = [...state.items];
//         items.push(action.payload);
//         return {
//             items
//         };

//     }

//     return state;
// }

export const fetchTodos = createAsyncThunk("todo_slice/fetchdata", async (_, thunkAPI) => {

    try {
        const url = "http://localhost:9000/todoItems";
        const resp = await axios.get(url);
        return resp.data;

    } catch (error) {

        console.log("fetch todos failed", error);
        return thunkAPI.rejectWithValue("Failed to fetch todos");
    }
})

const slice = createSlice({
    name: "todo_slice",
    initialState,
    reducers: {

        addItem: (state, action: PayloadAction<TodoItem>) => {
            state.items.push(action.payload);
        },
        setCompleted: (state, action: PayloadAction<TodoItem>) => {

            const index = state.items.findIndex(item => item.id === action.payload.id);
            if(index !== -1){
                state.items[index].isCompleted = action.payload.isCompleted
            }
        }
    },
    extraReducers: (builder) =>{

        builder.addCase(fetchTodos.pending, (state) => {
            console.log("fetchTodos.pending")
            state.status = 'pending'
        });
        builder.addCase(fetchTodos.rejected, (state) => {
            console.log("fetchTodos.rejected")
            state.status = 'failed'
        });
        builder.addCase(fetchTodos.fulfilled, (state, action: PayloadAction<TodoItem[]>) => {
            console.log("fetchTodos.fulfilled")
            state.status = 'completed';
            state.items = action.payload
        });
    }
});
//reducer
export const todoReducer  = slice.reducer;
//action creators
export const {addItem, setCompleted}  = slice.actions;



