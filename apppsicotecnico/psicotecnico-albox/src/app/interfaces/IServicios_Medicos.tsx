

export interface IServicios_Medicos {
    id_servicio: number;
    nombre_servicio: string;
    descripcion: string;
    costo: number;
    key?: number;
    servicio: IServicios_Medicos;
};

export interface IRespServicios_Medicos {
  status: number;
  data: IServicios_Medicos;
  msg: string;
};

export interface IColumn {
    key?: string;
    label: string;
};
const ColumnServicios:IColumn[] = [
    {
        key: "id_servicio",
        label: "id_servicio",
    },
    {
        key: "nombre_servicio",
        label: "nombre_servicio",
    },
    {
        key: "descripcion",
        label: "descripcion",
    },
    {
        key: "costo",
        label: "costo",
    }
]

export default ColumnServicios;