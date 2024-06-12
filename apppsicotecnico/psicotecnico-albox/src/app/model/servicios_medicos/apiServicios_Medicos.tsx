import { IRespServicios_Medicos, IServicio_Medico } from "@/app/interfaces/IServicios_Medicos";
import axios from "axios";

const apiBD = 'http://localhost:3001/api';
const apiServicios_Medicos = {
      
    listar: async (): Promise<IServicio_Medico[]> => {
        const ruta = `${apiBD}/servicio-medico`;
        const servicio_medico = await fetch(`${ruta}`, { cache: 'no-store'})  
            .then((res) => res.json())   
        return servicio_medico
    },

    new: async (Servicio_Medico:IServicio_Medico): Promise<IRespServicios_Medicos> => {
        const ruta = `${apiBD}/servicio-medico`;
        console.log(ruta)
        const {data} = await axios.post(`${ruta}`, {...Servicio_Medico})
        return data;
    }
}

export default apiServicios_Medicos