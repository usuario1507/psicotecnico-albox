
export async function getUsuarios() {

    try{
        const res = await fetch('http://localhost:3001/api/usuarios', { cache: 'no-store'})
        return res.json()
    }catch(error){
        throw new Error('Error en el data de Usuarios')
    }
}