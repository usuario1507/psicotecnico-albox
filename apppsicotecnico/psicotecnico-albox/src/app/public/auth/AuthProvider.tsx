import { IUsuario } from "@/app/interfaces/IUsuario";
import apiAuth from "@/app/model/auth/apiAuth";
import { FC, useReducer } from "react";
import { AuthContext } from "./AuthContext";
import AuthReducer from "./AuthReducer";


export interface AuthState{
    isLoggedIn: boolean;
    usuario?: IUsuario;
}

const AUTH_INITIAL_STATE: AuthState = {
    isLoggedIn: false,
    usuario: undefined
}
interface Props{
    children: any;
}
export const AuthProvider:FC<{children: any}> = ({ children }) => {
    const [ state, dispatch ] = useReducer( AuthReducer, AUTH_INITIAL_STATE );
    const loginUsuario = async (correo_electronico:string, contraseña:string):Promise<boolean> => {
        try {
            const data = await apiAuth.login({ correo_electronico, contraseña });
            console.log(data);
            const { token, usuario } = data;
            console.log(usuario);
            // Cookies.set('token', token);
            // setCookie('token', token);
            // setCookie('correo_electronico', usuario.correo_electronico);
            // setCookie('usuario', usuario.username);

            dispatch({ type: '[Auth] - Login', payload: usuario});
            return true;
        }catch(error){
            return false;
        }
    }
    return (
        <AuthContext.Provider value={{
            ...state,
            loginUsuario
        }}>
            
        </AuthContext.Provider>
    )
}

