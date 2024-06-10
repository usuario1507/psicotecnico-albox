
export async function getPacientes() {

    try{
        const res = await fetch('http://localhost:3001/api/paciente', { cache: 'no-store'})
        return res.json()
    }catch(error){
        throw new Error('Error en el data de pacientes')
    }
}