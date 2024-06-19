import { ILogin, IRespLogin } from "@/app/interfaces/ILogin"


const apiBD = 'http://localhost:3001/api'
const apiAuth = {

    login: async (login:ILogin): Promise<IRespLogin> => {
        const ruta = `${apiBD}/auth/login`;
        const result =
            await fetch(`${ruta}`, {
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(login),
                method: 'POST',
                cache: 'no-store'
            })
                .then((res) => res.json())
        return result
    }

}

export default apiAuth;