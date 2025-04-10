import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { authReducer } from "./authReducer";
import { todoReducer } from "./todoReducer";

const reducer = combineReducers({

    auth: authReducer,
    todo: todoReducer
})

export const store = configureStore({
    reducer,
})

export type AppState = ReturnType<typeof store.getState>;