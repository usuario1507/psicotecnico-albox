import { IMedico, IRespMedicos } from "@/app/interfaces/IMedicos";
import axios from "axios";

const apiBD = 'http://localhost:3001/api';
const apiMedicos = {

    listar: async (): Promise<IMedico[]> => {
        const ruta = `${apiBD}/medico`;
        const medicos = await fetch(`${ruta}`, { cache: 'no-store'}) 
             .then((res) => res.json())
        return medicos
    },

    detalle: async (id_medico: IMedico["id_medico"]): Promise<IMedico> => {
        const ruta = `${apiBD}/medico/${id_medico}`;
        const medico = await fetch(`${ruta}`, { cache: 'no-store'})
            .then((res) => res.json())
        return medico
    },

    new: async (Medico:IMedico): Promise<IRespMedicos> => {
        const ruta = `${apiBD}/medico`;
        console.log(ruta)
        const {data} = await axios.post(`${ruta}`, {...Medico})
        return data;
     }

}

export default apiMedicos