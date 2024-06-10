import { IPacientes } from "@/app/interfaces/IPacientes";
import { Button } from "@nextui-org/button";
import { FC } from "react";
import React from "react";
import Image from "next/image";
import Link from "next/link";


interface Props {
    pacientes: IPacientes[];
    columnas: String;
};

export const PacientesGrid:FC<Props> = ({pacientes, columnas}) => {
    return (
        <>
        
        <div className="flex justify-center" style={{ backgroundImage: "url('/patch-to-your-image.jpg')"}}>
        <div className="text-center text-black">
        <h1 className="text-2xl font-bold">Tabla de Pacientes</h1>   
        <Link color="foreground" href="/admin/pacientes/new">
            <Button color="primary">Crear Paciente</Button>
        </Link>
        
            <table>
               <thead>
                 <tr className="bg-cyan-300">
                    {
                        columnas.map ((columna) => (
                            <th className="border border-spacing-1" key={columna}>
                                {columna}
                            </th>
                        ))  
                    }
                    <th className="bg-cyan-300">Acciones</th>
                    <th className="bg-cyan-300">Foto</th>
                 </tr>
               </thead>
               <tbody>
                  {
                    pacientes.map( (paciente) => (
                        <tr className="bg-lime-500" key={ paciente.id_paciente }>
                           <td>{ paciente.id_paciente }</td>
                           <td>{ paciente.nombre }</td>
                           <td>{ paciente.apellido }</td>
                           <td>{ paciente.correo_electronico }</td>
                           <td>{ paciente.genero }</td>
                           <td>{ paciente.telefono }</td>
                           <td>{ paciente.direccion }</td>
                           <td>{ paciente.f_nacimiento }</td>
                           <td>
                               <svg className="h-8 w-8 text-red-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="4" y1="7" x2="20" y2="7" />  <line x1="10" y1="11" x2="10" y2="17" />  <line x1="14" y1="11" x2="14" y2="17" />  <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />  <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /></svg>
                               <svg className="h-8 w-8 text-red-500"  width="24"  height="24"  viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>
                               <svg className="h-8 w-8 text-red-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />  <line x1="1" y1="10" x2="23" y2="10" /></svg>
                           </td> 
                           <th>
                             <Image src={paciente.foto} width={50} height={50} alt={"foto del paciente"}/>
                           </th>
                        </tr>
                     )
                   )
                  }
                </tbody> 
            </table>
        </div>
        </div>
        </>
    )
}