

export interface IPruebas_Psicotecnicas {
    id_prueba: number;
    nombre_prueba: string;
    descripcion: string;
    costo: number;
    key?: number;
    prueba: IPruebas_Psicotecnicas;
};

export interface IRespPruebas_Psicotecnicas {
  status: number;
  data: IPruebas_Psicotecnicas;
  msg: string;
};

export interface IColumn {
    key?: string;
    label: string;
};
const ColumnPruebas:IColumn[] = [
    {
        key: "id_prueba",
        label: "id_prueba",
    },
    {
        key: "nombre_prueba",
        label: "nombre_prueba",
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

export default ColumnPruebas;