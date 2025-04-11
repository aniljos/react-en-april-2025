import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AuthState = {
    isAuthenticated: boolean;
    accessToken: string;
    refreshToken: string;
    username: string;
}

const initialState: AuthState = {
    isAuthenticated: false,
    accessToken: "",
    refreshToken: "",
    username: ""
}

const slice = createSlice({
    name: "auth-slice",
    initialState: initialState,
    reducers: {
        login: (state, action: PayloadAction<AuthState>)=> {
            state.isAuthenticated = action.payload.isAuthenticated;
            state.accessToken = action.payload.accessToken;
            state.refreshToken = action.payload.refreshToken;
            state.username = action.payload.username;
        },
        logout: (state)=> {
            // // eslint-disable-next-line @typescript-eslint/no-unused-vars
            state.isAuthenticated = false;
            state.accessToken = "";
            state.refreshToken = ""
            state.username = "";

        }

    }
})
export const {login, logout} = slice.actions;
export const authReducer = slice.reducer;