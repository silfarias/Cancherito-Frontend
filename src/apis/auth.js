import { useContext } from "react";
import { AuthContext } from "../context/AuthContext.jsx";

export const logout = async (authContext) => {
    const { dispatch } = authContext;

    localStorage.removeItem('token'); 
    dispatch ({ type: 'LOGOUT' }); 
}