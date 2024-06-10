'use client'
import {Button, Input} from "@nextui-org/react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { ICitas } from "@/app/interfaces/ICitas";
import apiCitas from "@/app/model/citas/apiCitas";

type Citasdata = {
  id_cita: number;
  fecha_hora: string;
};

const newCitaPage = () => {
    const { register, handleSubmit }= useForm<ICitas>();
    const onnewCitasdata = ( data: ICitas ) => {

        const {id_cita, fecha_hora } = data;
        data.id_cita = +data.id_cita;
        console.log(data);
        const result = apiCitas.new(data);
        console.log(result)
    }

    return (
        <div>
            <h1 className="container text-2xl mx-auto mt-4">Formulario de Cita</h1>
            <form onSubmit={ handleSubmit(onnewCitasdata)} noValidate>
             <div className="container mx-auto mt-6 flex w-full  flex-wrap md:flex-npwrap gap-4">
             <label className="block uppercase  text-lg font-bold" htmlFor="grid-id_cita">id_cita</label>
             <Input {...register('id_cita')} className="appearance-none block w-full text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="id_cita" type="number" placeholder="id_cita" />
            </div>
            <div className="container mx-auto mt-6 flex w-full  flex-wrap md:flex-npwrap gap-4">
            <label className="block uppercase text-lg font-bold" htmlFor="grid-fecha_hora">fecha_hora</label>
                <Input {...register('fecha_hora')} className="appearance-none block w-full text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="fecha_hora" type="fecha_hora" placeholder="fecha_hora" />
            </div>  
            <div>
            <Link color="foreground" passHref href="/admin/citas">
              <Button type="submit" color="primary" className="container mx-auto mt-7">Enviar</Button>
            </Link>
            </div>  
            </form>
        </div>
    )
}

export default newCitaPage