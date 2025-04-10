type AuthState = {
    isAuthenticated: boolean;
    username: string;
    accessToken: string;
    refreshToken: string
}
type AuthAction = {
    type: string;
    payload?: AuthState
}

const initialState: AuthState = {
    isAuthenticated: false,
    username: "",
    accessToken: "",
    refreshToken: ""
}

// Actions
// login {type: "login", payload: AuthState}
// logout {type: "logout"}


export const authReducer = (state=initialState, action: AuthAction) => {

    if(action.type === "login" && action.payload){
        return action.payload;
    }
    if(action.type === "logout"){
        return initialState;
    }

    return state;
}