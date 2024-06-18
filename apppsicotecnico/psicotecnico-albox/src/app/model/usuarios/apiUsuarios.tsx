import { IUsuario, IRespUsuarios } from "@/app/interfaces/IUsuario";
import axios from "axios";

const apiBD = 'http://localhost:3001/api';
const apiUsuarios = {

    listar: async (): Promise<IUsuario[]> => {
        const ruta = `${apiBD}/usuario`;
        const usuarios = await fetch(`${ruta}`, { cache: 'no-store'})
              .then((res) => res.json())
        return usuarios      
    },
     
    new: async (Usuario:IUsuario): Promise<IRespUsuarios> => {
        const ruta = `${apiBD}/usuarios`;
        console.log(ruta)
        const {data} = await axios.post(`${ruta}`, {...Usuario})
        return data;
    }
}

export default apiUsuarios