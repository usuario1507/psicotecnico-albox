import { IRespLogin } from "@/app/interfaces/ILogin";
import { IUsuario } from "@/app/interfaces/IUsuario";
import { createContext } from "react";


interface ContextProps{
    isLoggedIn: boolean;
    usuario:IUsuario;
    loginUsuario: (correo_electronico: string, contraseña:string) => Promise<boolean>;
    registroUsuario: (correo_electronico: string, username:string, contraseña:string, instagram:string) => Promise<IRespLogin>
}

export const AuthContext = createContext( {} as ContextProps );