import apiCitas from "@/app/model/citas/apiCitas";
import { CitasGrid } from "../componentes/Grid/CitasGrid";


const CitasPage = async () => {

    const citas = await apiCitas.listar();
    console.log("---", citas)
    const columns = ["codigo","fecha_hora"]
    console.log(columns)
    return (
        <>
           <h2>Listado2 de Citas</h2>
          <CitasGrid citas={citas} columnas={columns} />
        </>
    )
}

export default CitasPage;


