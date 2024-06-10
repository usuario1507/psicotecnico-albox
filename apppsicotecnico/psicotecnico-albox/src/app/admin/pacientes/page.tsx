import apiPacientes from "@/app/model/pacientes/apiPacientes"
import { PacientesGrid } from "../componentes/Grid/PacientesGrid";



const PacientesPage = async () => {

    const pacientes = await apiPacientes.listar();
    console.log("----", pacientes)
    const columns = ["codigo", "nombre", "apellido", "correo", "genero", "telefono", "direccion", "f_nacimiento"]
    console.log(columns)
    return (
        <>
           <h2>Listado de Pacientes</h2>
           <PacientesGrid pacientes={pacientes} columnas={columns} />
        </>
    )
}

export default PacientesPage;