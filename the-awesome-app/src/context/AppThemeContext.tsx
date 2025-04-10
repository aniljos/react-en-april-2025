import { createContext, useState } from "react";

export type AppThemeState = {
    mode: string;
    changeMode: (mode:string) => void
}
export const initialState: AppThemeState = {
    mode: "light",
    changeMode: ()=> {}
}

//context
export const AppThemeContext = createContext(initialState);


export function AppThemeContextProvider(props: {children: React.ReactNode}){

    const [mode, setMode] = useState(initialState.mode);

    return (
        <AppThemeContext.Provider value={{mode, changeMode: setMode}}>
          {props.children}
        </AppThemeContext.Provider>
    )
}