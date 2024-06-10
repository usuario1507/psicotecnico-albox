import apiAdministrativos from "@/app/model/administrativos/apiAdministrativos"
import { AdministrativosGrid } from "../componentes/Grid/AdministrativosGrid";



const AdministrativosPage = async () => {

    const administrativos = await apiAdministrativos.listar();
    const columns = ["codigo","nombre","apellido","correo", "genero", "telefono" ]
    console.log(administrativos)
    return (
        <>
           <h2>Listado de Administrativos</h2>
          <AdministrativosGrid administrativos={administrativos} columnas={columns} />
        </>
    )
}

export default AdministrativosPage;