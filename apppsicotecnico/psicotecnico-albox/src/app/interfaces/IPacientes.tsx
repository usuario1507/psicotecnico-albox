

export interface IPaciente {
    id_paciente: number;
    nombre: string;
    apellido: string;
    genero: string;
    telefono: number;
    direccion: string;
    f_nacimiento: string;
    foto: string;
};

export interface IRespPacientes {
  status: number;
  data: IPaciente;
  msg: string;
};

export interface IColumn {
    key?: string;
    label: string;
};
const ColumPacientes:IColumn[] = [
    {
        key: "id_paciente",
        label: "id_paciente",
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
        key: "genero",
        label: "genero",
    },
    {
        key: "telefono",
        label: "telefono",
    },
    {
        key: "direccion",
        label: "direccion",
    },
    {
        key: "f_nacimiento",
        label: "f_nacimiento",
    },
    {
        key: "foto",
        label: "foto",
    }
];

export default ColumPacientes;