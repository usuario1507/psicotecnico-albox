'use client'
import {Input, Button} from "@nextui-org/react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { IServicio_Medico } from "@/app/interfaces/IServicios_Medicos";
import apiServicios_Medicos from "@/app/model/servicios_medicos/apiServicios_Medicos";


type ServiciosData = {
  id_servicio: number;
  nombre_servicio: string;
  descripcion: string;
  costo: number;
};

const newServicioPage = () => {
  const { register, handleSubmit }= useForm<IServicio_Medico>();
  const onnewServiciosData = ( data: IServicio_Medico ) => {

    const {id_servicio, costo, ...resto } = data;
    data.id_servicio = +data.id_servicio;
    data.costo = +data.costo;
    console.log(data);
    const result = apiServicios_Medicos.new(data);
    console.log(result);
  }

    return (
        <div>
          <h1 className="container text2xl mx-auto mt-4">Formulario de Servicio Médico</h1>
          <form onSubmit={ handleSubmit(onnewServiciosData)} noValidate>
          <div className="container mx-auto mt-6 flex w-full flex-wrap md:flex-npwrap gap-4">
          <label className="block uppercase  text-lg font-bold " htmlFor="grid-id_servicio">id_servicio</label>
              <Input {...register('id_servicio')}
               className="appearance-none block w-full text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
               id="id_servicio" type="number" placeholder="id_servicio" />
          </div>  
          <div className="container mx-auto mt-6 flex w-full flex-wrap md:flex-npwrap gap-4">
          <label className="block uppercase   text-lg font-bold" htmlFor="grid-nombre_servicio">nombre_servicio</label>
              <Input {...register('nombre_servicio')}
               className="appearance-none block w-full  text-gray-700 border  rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="nombre_servicio" type="text" placeholder="nombre_servicio" />
          </div>
          <div className="container mx-auto mt-6 flex w-full flex-wrap md:flex-npwrap gap-4">
          <label className="block uppercase  text-lg font-bold " htmlFor="grid-descripcion">descripcion</label>
              <Input {...register('descripcion')} 
              className="appearance-none block w-full  text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
              id="descripcion" type="text" placeholder="descripcion" />
          </div>
          <div className="container mx-auto mt-6 flex w-full flex-wrap md:flex-npwrap gap-4">
          <label className="block uppercase  text-lg font-bold" htmlFor="grid-costo">costo</label>
              <Input {...register('costo')} 
              className="appearance-none block w-full text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
              id="costo" type="number" placeholder="costo" />
          </div>
          <div>
          <Link color="foreground" passHref href="/admin/servicio_medicos">
            <Button type="submit" color="primary" className="container mx-auto mt-7">Enviar</Button>
          </Link>
          </div>
          </form>
        </div>
    )
}

export default newServicioPage