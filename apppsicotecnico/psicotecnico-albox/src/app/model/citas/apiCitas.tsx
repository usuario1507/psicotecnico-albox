import { ICita, IRespCitas } from "@/app/interfaces/ICitas"
import axios from "axios";

const apiBD = 'http://localhost:3001/api';
const apiCitas = {

    listar: async (): Promise<ICita[]> => {
        const ruta = `${apiBD}/citas`;
        const citas = await fetch(`${ruta}`, { cache: 'no-store'}) 
             .then((res) => res.json())
        return citas
    },

    new: async (Cita:ICita): Promise<IRespCitas> => {
        const ruta = `${apiBD}/citas`;
        console.log(ruta)
        const {data} = await axios.post(`${ruta}`, {...Cita})
        return data;
    }
}

export default apiCitas