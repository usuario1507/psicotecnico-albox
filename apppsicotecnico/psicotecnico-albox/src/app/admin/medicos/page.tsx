import apiMedicos from "@/app/model/medicos/apiMedicos";
import { MedicosGrid } from "../componentes/Grid/MedicosGrid";


const MedicosPage = async () => {
    
    const medicos = await apiMedicos.listar();
    console.log("-----", medicos)
    const columns = ["codigo","nombre", "apellido", "correo", "genero", "telefono", "especialidad" ]
    console.log(medicos)
    return (
        <>
            {/* <ul>
                {
                    medicos.map( (medico) => (
                        <li key={medico.id_medico}>{medico.nombre}</li>
                    ))
                }
            </ul> */}
            <h2>Listado de Medicos</h2>
          <MedicosGrid medicos={medicos} columnas={columns} />  
        </>
    )
}

export default MedicosPage;