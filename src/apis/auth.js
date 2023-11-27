import { useContext } from "react";
import { AuthContext } from "../context/AuthContext.jsx";

export const logout = async () => {
    const { dispatch } = useContext(AuthContext);

    localStorage.removeItem('token'); 
    dispatch ({ type: 'LOGOUT' }); 
}