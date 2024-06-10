
export interface ICitas {
    id_cita: number;
    fecha_hora: string; 
    key?: number;
    cita: ICitas;
};

export interface IRespCitas {
  status: number;
  data: ICitas;
  msg: string;
};

export interface IColumn {
    key?: string;
    label: string;
};
const ColumnCitas:IColumn[] = [
    {
        key: "id_cita",
        label: "id_cita",
    },
    {
        key: "fecha_hora",
        label: "fecha_hora",
    }
];

export default ColumnCitas;