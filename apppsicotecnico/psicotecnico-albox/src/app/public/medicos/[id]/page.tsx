import apiMedicos from "@/app/model/medicos/apiMedicos";
import { PlantillaMedico } from "../plantilla_detalle_medico";



interface Props {
    id_medico: number;
}

const MedicoDetallePage = async ({params: {id}}: {params: {id:number}}) => {

   const medico = await apiMedicos.detalle(id);
  return (
    <>
         <h2>Detalle del medico {medico.nombre}</h2>
        {<PlantillaMedico medico={medico}/>}

    </>
         )
}
export default MedicoDetallePage;