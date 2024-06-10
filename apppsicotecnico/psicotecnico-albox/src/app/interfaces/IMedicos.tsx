
export interface IMedico {
    id_medico: number;
    nombre: string;
    apellido: string;
    correo_electronico: string;
    genero: string;
    telefono: number;
    especialidad: string;
    foto: string;
    key?: number;
    // medico: IMedicos;
};

export interface IRespMedicos {
  status: number;
  data: IMedico;
  msg: string;
};

export interface IColumn {
    key?: string;
    label: string;
};
const ColumMedicos:IColumn[] = [
    {
      key: "id_medico",
      label: "id_medico",
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
      key: "foto",
      label: "foto",
    }
];



export default ColumMedicos;