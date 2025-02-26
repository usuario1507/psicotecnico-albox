import { IPaciente, IRespPacientes } from "@/app/interfaces/IPacientes";
import axios from "axios";

const apiBD = 'http://localhost:3001/api';
const apiPacientes = {

    listar: async (): Promise<IPaciente[]>=> {
        const ruta = `${apiBD}/paciente`;
        const pacientes = await fetch(`${ruta}`, { cache: 'no-store'})
             .then((res) => res.json())
        return pacientes
    },

    new: async (Paciente:IPaciente): Promise<IRespPacientes> => {
        const ruta = `${apiBD}/paciente`;
        console.log(ruta)
        const {data} = await axios.post(`${ruta}`, {...Paciente})
        return data;
    }
}

export default apiPacientes