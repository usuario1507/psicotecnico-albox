import { IUsuario } from "@/app/interfaces/IUsuario";
import { AuthState } from "./AuthProvider";



type AuthActionType = 
    | { type: '[Auth] - Login', payload: IUsuario }
    | { type: '[Auth] - Logout'}

const AuthReducer = (state: AuthState, action: AuthActionType):AuthState => {
    switch (action.type){
      case '[Auth] - Login':
        return {
            ...state,
            isLoggedIn: true,
            usuario: action.payload
        }
        case '[Auth] - Logout':
        return {
            ...state,
            isLoggedIn: false,
            usuario: undefined
        }
        default:
            return state
    }
}

export default AuthReducer