import { IUsuario } from "./IUsuario";

export interface ILogin {
    correo_electronico: string;
    contraseña: string;
}

export interface IRespLogin {
    msg: string;
    status: number;
    usuario: IUsuario,
    token: string;
}
