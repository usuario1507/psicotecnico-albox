
export async function getServicios_Medicos() {

    try{
        const res = await fetch('http://localhost:3001/api/servicio-medico', { cache: 'no-store'})
    }catch(error){
        throw new Error('Error en el data de Servicios_Medicos')
    }
}