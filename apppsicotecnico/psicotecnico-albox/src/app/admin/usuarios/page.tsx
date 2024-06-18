import apiUsuarios from "@/app/model/usuarios/apiUsuarios";
import { UsuariosGrid } from "../../componentes/Grid/UsuariosGrid";

const UsuariosPage = async () => {
    
    const usuarios = await apiUsuarios.listar();
    console.log("---", usuarios)
    const columns = ["codigo","correo_electronico","username","contraseña","rol","instagram","logo","createdAt","updatedAt","token"]
    console.log(columns)
    return (
        <>
           <h2>Listado de Usuarios</h2>
           <UsuariosGrid usuarios={usuarios} columnas={columns} />
        </>
    )
}

export default UsuariosPage;