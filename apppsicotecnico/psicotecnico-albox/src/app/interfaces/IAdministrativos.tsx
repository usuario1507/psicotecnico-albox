
export interface IAdministrativo {
    id_administrativo: number;
    nombre: string;
    apellido: string;
    correo_electronico: string;
    genero: string;
    telefono: number;
    foto: string;
    key?: number;
    // administrativo: IAdministrativos;
};

export interface IRespAdministrativos {
  status: number;
  data: IAdministrativo;
  msg: string;
};

export interface IColumn {
    key?: string;
    label: string;
};
const ColumAdministrativos:IColumn[] = [
    {
        key: "id_administrativo",
        label: "id_administrativo",
    },
    {
        key: "nombre",
        label: "nombre",
    },
    {
        key: "apellido",
        label: "apellido",
    },
    {
        key: "correo_electronico",
        label: "correo_electronico",
    },
    {
        key: "genero",
        label: "genero",
    },
    {
        key: "telefono",
        label: "telefono",
    },
    {
        key: "foto",
        label: "foto",
    }
];

export default ColumAdministrativos;