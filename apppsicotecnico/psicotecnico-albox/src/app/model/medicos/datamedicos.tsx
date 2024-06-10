
export async function getMedicos() {

    try{
        const res = await fetch('http://localhost:3001/api/medico', { cache: 'no-store'})
        return res.json()
    }catch(error){
        throw new Error('Error en el data de medicos')
    }
}