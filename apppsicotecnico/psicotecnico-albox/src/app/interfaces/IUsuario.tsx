
export interface IUsuario {
  id_usuario: number;
  correo_electronico: string;
  username: string;
  contraseña: string;
  rol: string;
  instagram?: string;
  logo: string;
  createdAt: Date;
  updatedAt: Date;
  token?: string;
};

export interface IRespUsuarios {
  status: number;
  data: IUsuario;
  msg: string;
};

export interface IColumn {
    key?: string;
    label: string;
};
const ColumUsuarios:IColumn[] = [
    {
        key: "id_usuario",
        label: "id_usuario",
    },
    {
        key: "correo_electronico",
        label: "correo_electronico",
    },
    {
        key: "username",
        label: "username",
    },
    {
        key: "contraseña",
        label: "contraseña",
    },
    {
        key: "rol",
        label: "rol",
    },
    {
        key: "instagram",
        label: "instagram",
    },
    {
        key: "logo",
        label: "logo",
    },
    {
        key: "createdAt",
        label: "createdAt",
    },
    {
        key: "updatedAt",
        label: "updatedAt",
    },
    {
        key: "token",
        label: "token",
    }
];

export default ColumUsuarios;
