'use client'
import { IPrueba_Psicotecnica } from "@/app/interfaces/IPruebas_Psicotecnicas";
import apiPruebas_Psicotecnicas from "@/app/model/pruebas_psicotecnicas/apiPruebas__Psicotecnicas";
import {Input, Button} from "@nextui-org/react"
import Link from "next/link";
import { useForm } from "react-hook-form";

type PruebasData = {
  id_prueba: number;
  nombre_prueba: string;
  descripcion: string;
  costo: number;
};

const newPruebaPage = () => {
  const { register, handleSubmit }= useForm<IPrueba_Psicotecnica>();
  const onnewPruebasData = ( data: IPrueba_Psicotecnica ) => {
    
    const {id_prueba, costo, ...resto } = data;
    data.id_prueba = +data.id_prueba;
    data.costo = +data.costo;
    console.log(data);
    const result = apiPruebas_Psicotecnicas.new(data);
    console.log(result);
  }

    return (
        <div>
          <h1 className="container text-2xl mx-auto mt-4">Formulario de Prueba Psicotecnica</h1>
          <form 
          onSubmit={ handleSubmit(onnewPruebasData)} noValidate
          >
          <div className="container mx-auto mt-6 flex w-full flex-wrap md:flex-npwrap gap-4">
          <label className="block uppercase  text-lg font-bold" htmlFor="grid-id_prueba">id_servicio</label>
              <Input {...register('id_prueba')} 
              className="appearance-none block w-full  text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
              id="id_prueba" type="number" placeholder="id_prueba" />
          </div>
          <div className="container mx-auto mt-6 flex w-full flex-wrap md:flex-npwrap gap-4">
          <label className="block uppercase text-lg font-bold" htmlFor="grid-nombre_prueba">nombre_prueba</label>
              <Input {...register('nombre_prueba')} 
              className="appearance-none block w-full  text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
              id="nombre_prueba" type="text" placeholder="nombre_prueba" />
          </div>
          <div className="container mx-auto mt-6 flex w-full flex-wrap md:flex-npwrap gap-4">
          <label className="block uppercase text-lg font-bold" htmlFor="grid-descripcion">descripcion</label>
              <Input {...register('descripcion')} 
              className="appearance-none block w-full  text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
              id="descripcion" type="text" placeholder="descripcion" />
          </div>
          <div className="container mx-auto mt-6 flex w-full flex-wrap md:flex-npwrap gap-4">
          <label className="block uppercase text-lg font-bold" htmlFor="grid-costo">costo</label>
              <Input {...register('costo')} 
              className="appearance-none block w-full  text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
              id="costo" type="number" placeholder="costo" />
          </div>
          <div>
          <Link color="foreground" passHref href="/admin/prueba_psicotecnicas">
            <Button type="submit" color="primary" className="container mx-auto mt-7" href="/admin/prueba_psicotecnicas">Enviar</Button>
          </Link>
          </div>
          </form>
        </div>
    )
}

export default newPruebaPage