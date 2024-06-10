import apiServicios_Medicos from "@/app/model/servicios_medicos/apiServicios_Medicos"
import { Servicios_MedicosGrid } from "../componentes/Grid/Servicios_MedicosGrid";

const ServiciosMedicosPage = async () => {

    const servicios_medicos = await apiServicios_Medicos.listar();
    console.log ("----", servicios_medicos)
    const columns = ["codigo", "nombre_servicio", "descripcion", "costo"]
    console.log(columns)
    return (
        <>
          <h2>Lista de Servicios_Medicos</h2>
          <Servicios_MedicosGrid servicios_medicos={servicios_medicos} columnas={columns} />
        </>
    )
}

export default ServiciosMedicosPage;