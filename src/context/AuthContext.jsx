import { createContext, useReducer } from "react";
import { authReducer } from "../reducers/authReducer.js";

export const AuthContext = createContext(null)

export const AuthUser = ({children}) => {
    const [state, dispatch] = useReducer(authReducer, { isLogged: false })

    return (
        <AuthContext.Provider value={ { 
            dispatch,
            state 
        } }>
            { children }
        </AuthContext.Provider>
    )
}