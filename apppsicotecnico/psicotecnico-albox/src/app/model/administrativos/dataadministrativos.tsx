
export async function getAdministrativos() {

    try{
         const res = await fetch('http://localhost:3001/api/administrativo', { cache: 'no-store'})
         return res.json()
    }catch(error){
         throw new Error('Error en el data de administrativos')
    }
}