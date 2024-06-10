import { IAdministrativos, IRespAdministrativos } from "@/app/interfaces/IAdministrativos";
import axios from "axios";

const apiBD = 'http://localhost:3001/api';
const apiAdministrativos = {

    listar: async (): Promise<IAdministrativos[]> => {
        const ruta = `${apiBD}/administrativo`;
        const administrativos = await fetch(`${ruta}`, { cache: 'no-store'})
             .then((res) => res.json())
        return administrativos
    },

    new: async (Administrativo:IAdministrativos): Promise<IRespAdministrativos> => {
        const ruta = `${apiBD}/administrativo`;
        console.log(ruta)
        const {data} = await axios.post(`${ruta}`, {...Administrativo})
        return data;
    }
}

export default apiAdministrativos