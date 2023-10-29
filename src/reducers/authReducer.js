import { type } from "../types/type";

export const authReducer = (state, action) => { 
//state: el estado actual del sistema, action: objeto que define la accion que debe llevar a cabo el estado

    switch (action.type) {
        case type.LOGIN:
            return {
                ...action.payload,
                isLogged: true
            }
        case type.LOGOUT:
            return {
                isLogged: false
            }
        default:
            return state
    }
}