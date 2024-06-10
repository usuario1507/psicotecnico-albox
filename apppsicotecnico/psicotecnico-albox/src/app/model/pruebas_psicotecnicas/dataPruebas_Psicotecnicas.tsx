
export async function getPruebas_Psicotecnicas() {

    try{
        const res = await fetch('http://localhost:3001/api/prueba-psicotecnica', { cache: 'no-store'})
        return res.json()
    }catch(error){
        throw new Error('Error en el data de Pruebas_Psicotecnicas')
    }
}

