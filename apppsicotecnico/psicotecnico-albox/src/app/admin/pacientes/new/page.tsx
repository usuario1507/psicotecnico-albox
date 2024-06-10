'use client'
import { IPacientes } from "@/app/interfaces/IPacientes";
import apiPacientes from "@/app/model/pacientes/apiPacientes";
import {Button, Input } from "@nextui-org/react";
import Link from "next/link";
import { useForm } from "react-hook-form";

type Pacientesdata = {
  id_paciente: number;
  nombre: string;
  apellido: string;
  correo_electronico: string;
  genero: string;
  telefono: number;
  direccion: string;
  f_nacimiento: string;
  foto: string;
};

const newPacientePage = () => {
  const { register, handleSubmit }= useForm<IPacientes>();
  const onnewMedicosData = async ( data: IPacientes ) => {
   
    const {id_paciente, telefono, ...resto } = data;
    data.id_paciente = +data.id_paciente;
    data.telefono = +data.telefono;
    console.log(data);
    const result = apiPacientes.new(data); 
    console.log(result)
  }  

  return (
    <div>
    <h1 className="container text-2xl mx-auto mt-4">Formulario de Medico</h1>
    <form 
        onSubmit={ handleSubmit(onnewMedicosData)}  noValidate
        className="flex flex-row flex-wrap"    
    >
      <div className="container mx-auto mt-6 flex w-full basis-1/6 flex-wrap md:flex-npwrap gap-4">
        <label className="block uppercase   text-lg font-bold" htmlFor="grid-id_paciente">id_paciente</label>
        <Input 
          {...register('id_paciente')} 
          className="appearance-none block w-full text-gray-700 border  rounded py-3 px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
          id="id_paciente" type="number" placeholder="id_paciente" />
      </div>
      <div className="container  mx-auto mt-6 flex w-full basis-9/12 flex-wrap md:flex-npwrap gap-4">
    <label className="block uppercase tracking-wide text-gray-700 text-lg font-bold mb-2" htmlFor="grid-foto">foto</label>
        <Input {...register('foto')} 
        className="appearance-none block w-full  text-gray-700 border  rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
        id="foto" type="foto" placeholder="foto" />
    </div>
      <div className="container mx-auto mt-6 flex basis-1/5 flex-wrap md:flex-npwrap gap-4">
        <label className="block uppercase  text-lg font-bold" htmlFor="grid-nombre">nombre</label>
        <Input 
          {...register('nombre')} 
          className="appearance-none block w-full  text-gray-700 border  rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
          id="nombre" type="text" placeholder="nombre" />
      </div>
    <div className="container mx-auto mt-6 flex basis-9/12 flex-wrap md:flex-npwrap gap-4">
      <label className="block uppercase tracking-wide text-gray-700 text-lg font-bold mb-2" htmlFor="grid-apellido">apellido</label>
      <Input 
        {...register('apellido')} 
        className="appearance-none block w-full  text-gray-700 border  rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
        id="apellido" type="text" placeholder="apellido" />
    </div>
    <div className="container mx-auto mt-6 flex w-full flex-wrap md:flex-npwrap gap-4">
    <label className="block uppercase tracking-wide text-gray-700 text-lg font-bold mb-2" htmlFor="grid-correo_electronico">correo_electronico</label>
        <Input {...register('correo_electronico')} 
        className="appearance-none block w-full  text-gray-700 border  rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
        id="correo_electronico" type="text" placeholder="correo_electronico" />   
    </div>
    <div className="container basis-1/4 mx-auto mt-6 flex w-full flex-wrap md:flex-npwrap gap-4">
    <label className="block uppercase tracking-wide text-gray-700 text-lg font-bold mb-2" htmlFor="grid-genero">genero</label>
    <select 
    className="appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
    {...register('genero')} >
       <option>masculino</option>
       <option>femenino</option>
      </select>
    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
    </div>
    </div>
    <div className="container basis-1/4 mx-auto mt-6 flex w-full flex-wrap md:flex-npwrap gap-4">
    <label className="block uppercase tracking-wide text-gray-700 text-lg font-bold mb-2" htmlFor="grid-telefono">telefono</label>
        <Input {...register('telefono')} 
        className="appearance-none block w-full  text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
        id="telefono" type="telefono" placeholder="telefono" />
    </div>
     <div className="container basis-1/4 mx-auto mt-6 flex w-full flex-wrap md:flex-npwrap gap-4">
    <label className="block uppercase tracking-wide text-gray-700 text-lg font-bold mb-2" htmlFor="grid-direccion">direccion</label>
        <Input {...register('direccion')} 
        className="appearance-none block w-full  text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
        id="direccion" type="direccion" placeholder="direccion" />
    </div>
    <div className="container mx-auto mt-6 flex w-full flex-wrap md:flex-npwrap gap-4">
    <label className="block uppercase tracking-wide text-gray-700 text-lg font-bold mb-2" htmlFor="grid-f_nacimiento">f_nacimiento</label>
        <Input {...register('f_nacimiento')} 
        className="appearance-none block w-full  text-gray-700 border  rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
        id="correo_electronico" type="text" placeholder="correo_electronico" />   
    </div>
    <div>
    <Link  color="foreground" passHref  href="/admin/medicos" >
     <Button type="submit" color="primary" className="container mx-auto mt-7">Enviar</Button>
    </Link>
    </div>
    </form>
  </div>
  )
}

export default newPacientePage
