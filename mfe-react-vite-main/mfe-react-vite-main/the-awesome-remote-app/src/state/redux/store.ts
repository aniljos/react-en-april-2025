import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { authReducer } from "./authReducer";



const reducers = combineReducers({
    auth: authReducer
});

export const store = configureStore({
    reducer: reducers
})

export type RootState = ReturnType<typeof store.getState>;