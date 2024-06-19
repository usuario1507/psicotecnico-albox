'use client'
import { IAdministrativo } from "@/app/interfaces/IAdministrativos";
import apiAdministrativos from "@/app/model/administrativos/apiAdministrativos";
import {Button, Input} from "@nextui-org/react";
import Link from "next/link";
import { useForm } from "react-hook-form";

type AdministrativosData = {
  id_administrativo: number;
  nombre: string;
  apellido: string;
  correo_electronico: string;
  genero: string;
  telefono: number;
  foto: string;
};


const newAdministrativoPage = () => {
  //console.log("---new-");
   const { register, handleSubmit }= useForm<IAdministrativo>();
   const onnewAdministrativosData = async ( data: IAdministrativo ) => {
    //console.log("---new4-");
    const {id_administrativo, telefono, ...resto } = data;
    data.id_administrativo = +data.id_administrativo;
    data.telefono = +data.telefono;
    //console.log("----",data);
    const result = apiAdministrativos.new(data);
    console.log(result)
   }

    return (
      <div>
      <h1 className="container text2-l mx-auto mt-4">Formulario de Administrativo</h1>
      <form 
          onSubmit={ handleSubmit(onnewAdministrativosData)} noValidate
          className="flex flex-row flex-wrap"
       >
          <div className="container mx-auto mt-6 flex w-full basis-1/5 flex-wrap md:flex-npwrap gap-4">
            <label className="block uppercase  text-lg font-bold" htmlFor="grid-id_administrativo">id_administrativo</label>
            <Input 
              {...register('id_administrativo')} 
              className="appearance-none block w-full text-gray-700 border  rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
              id="id_administrativo" type="number" placeholder="id_administrativo" />
          </div>
          <div className="container mx-auto mt-6 flex w-full basis-9/12 flex-wrap md:flex-npwrap gap-4">
          <label className="block uppercase  text-lg font-bold" htmlFor="grid-foto">foto</label>
              <Input {...register('foto')} 
              className="appearance-none block w-full  text-gray-700 border  rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
              id="foto" type="foto" placeholder="foto" />
          </div>
          <div className="container mx-auto mt-6 flex w-full basis-1/5 flex-wrap md:flex-npwrap gap-4">
          <label className="block uppercase  text-lg font-bold " htmlFor="grid-nombre">nombre</label>
              <Input {...register('nombre')} 
              className="appearance-none block w-full  text-gray-700 border  rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="nombre" type="text" placeholder="nombre" />
          </div>
          <div className="container mx-auto mt-6 flex w-full basis-9/12 flex-wrap md:flex-npwrap gap-4">
          <label className="block uppercase  text-lg font-bold " htmlFor="grid-apellido">apellido</label>
              <Input {...register('apellido')} 
              className="appearance-none block w-full  text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
              id="apellido" type="text" placeholder="apellido" />
          </div>
          <div className="container mx-auto mt-6 flex w-full basis-full flex-wrap md:flex-npwrap gap-4">
          <label className="block uppercase  text-lg font-bold" htmlFor="grid-correo_electronico">correo_electronico</label>
              <Input {...register('correo_electronico')} 
              className="appearance-none block w-full text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
              id="correo_electronico" type="text" placeholder="correo_electronico" />
          </div>
          <div className="container mx-auto mt-6 flex w-full basis-1/5 flex-wrap md:flex-npwrap gap-4">
          <label className="block uppercase text-lg font-bold" htmlFor="grid-genero">genero</label>
          <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
             <option>masculino</option>
             <option>femenino</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
          </div> 
          </div>
          <div className="container mx-auto mt-6 flex w-full basis-9/12 flex-wrap md:flex-npwrap gap-4">
          <label className="block uppercase  text-lg font-bold" htmlFor="grid-telefono">telefono</label>
              <Input {...register('telefono')} 
              className="appearance-none block w-full  text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
              id="telefono" type="telefono" placeholder="telefono" />
          </div>
          <div>
          <Link color="foreground" passHref href="/admin/administrativos">
              <Button type="submit" color="primary" className="container mx-auto mt-7">Enviar</Button>
          </Link>
          </div>
          </form>
        </div>
    )
}

export default newAdministrativoPage