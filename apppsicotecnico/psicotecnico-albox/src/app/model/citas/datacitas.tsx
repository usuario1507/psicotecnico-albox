
export async function getCitas() {

    try{
        const res = await fetch('http://localhost:3001/api/cita', { cache: 'no-store'})
        return res.json()
    }catch(error){
        throw new Error('Error en el data de Citas')
    }
}