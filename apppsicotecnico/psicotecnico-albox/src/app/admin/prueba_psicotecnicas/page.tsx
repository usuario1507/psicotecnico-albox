import apiPruebas_Psicotecnicas from "@/app/model/pruebas_psicotecnicas/apiPruebas__Psicotecnicas"
import { Pruebas_PsicotecnicasGrid } from "../componentes/Grid/Pruebas_PsicotecnicasGrid";

const PruebasPsicotecnicasPage = async () => {

    const pruebas_psicotecnicas = await apiPruebas_Psicotecnicas.listar();
    console.log ("---", pruebas_psicotecnicas)
    const columns = ["codigo", "nombre_prueba", "descripcion", "costo"]
    console.log(columns)
    return (
        <>
          <h2>Lista de Pruebas_Psicotecnicas</h2>
          <Pruebas_PsicotecnicasGrid pruebas_psicotecnicas={pruebas_psicotecnicas} columnas={columns} />
        </>
    )
}

export default PruebasPsicotecnicasPage;