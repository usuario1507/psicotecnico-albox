import apiMedicos from "@/app/model/medicos/apiMedicos";



const MedicosPage = async () => {

    const medicos = await apiMedicos.listar();

    console.log (medicos);

    return (
        <section className="flex flex-col items-center">
            <h2 className="container mx-auto mt-10">Listado de Medicos</h2>
        </section>
    )
}

export default MedicosPage;