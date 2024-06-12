import { IPrueba_Psicotecnica, IRespPruebas_Psicotecnicas } from "@/app/interfaces/IPruebas_Psicotecnicas";
import axios from "axios";


const apiBD = 'http://localhost:3001/api';
const apiPruebas_Psicotecnicas = {

    listar: async (): Promise<IPrueba_Psicotecnica[]> => {
        const ruta = `${apiBD}/prueba-psicotecnica`;
        const prueba_psicotecnica = await fetch(`${ruta}`, { cache: 'no-store'})
            .then((res) => res.json())
        return prueba_psicotecnica
    },

    new: async (Prueba_Psicotecnica:IPrueba_Psicotecnica): Promise<IRespPruebas_Psicotecnicas> => {
        const ruta = `${apiBD}/prueba-psicotecnica`;
        console.log(ruta)
        const {data} = await axios.post(`${ruta}`, {...Prueba_Psicotecnica})
        return data;
    }
}

export default apiPruebas_Psicotecnicas