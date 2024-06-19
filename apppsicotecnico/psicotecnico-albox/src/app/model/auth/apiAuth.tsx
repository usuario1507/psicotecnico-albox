import { ILogin, IRespLogin } from "@/app/interfaces/ILogin";
import axios from "axios";



const apiBD = 'http://localhost:3001/api';

const apiAuth = {

    login: async (login:ILogin): Promise<IRespLogin> => {
        const ruta = `${apiBD}/auth/login`;
        const {data} = await axios.post(`${ruta}`, login)
        return data
    }
}

export default apiAuth;