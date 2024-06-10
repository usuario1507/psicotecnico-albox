import { IPruebas_Psicotecnicas, IColumn } from "@/app/interfaces/IPruebas_Psicotecnicas";
import { FC } from "react";
import { Button } from "@nextui-org/button";
import React from "react";
import Link from "next/link";

interface Props {
    pruebas_psicotecnicas: IPruebas_Psicotecnicas[];
    columnas: String;
};

export const Pruebas_PsicotecnicasGrid:FC<Props> = ({pruebas_psicotecnicas, columnas}) => {
    return (
        <>
        
        <div className="flex justify-center">
        <div className="text-center text-black">
        <h1 className="text-2xl font-bold">Tabla de Pruebas_Psicotecnicas</h1>
        <Link color="foreground" href="/admin/prueba_psicotecnicas/new">
            <Button color="primary">Crear Prueba_Psicotecnica</Button>
        </Link>
        
            <table className="border-collapse border border-slate-400">
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
                  </tr>
                </thead>
                <tbody>
                   {
                     pruebas_psicotecnicas.map( (pruebas_psicotecnicas) => (
                        <tr className="bg-lime-500" key={ pruebas_psicotecnicas.id_prueba }>
                           <td>{ pruebas_psicotecnicas.id_prueba }</td>
                           <td>{ pruebas_psicotecnicas.nombre_prueba }</td>
                           <td>{ pruebas_psicotecnicas.descripcion }</td>
                           <td>{ pruebas_psicotecnicas.costo }</td>
                           <td>
                               <svg className="h-8 w-8 text-red-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="4" y1="7" x2="20" y2="7" />  <line x1="10" y1="11" x2="10" y2="17" />  <line x1="14" y1="11" x2="14" y2="17" />  <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />  <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /></svg>
                               <svg className="h-8 w-8 text-red-500"  width="24"  height="24"  viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>
                               <svg className="h-8 w-8 text-red-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />  <line x1="1" y1="10" x2="23" y2="10" /></svg>
                           </td> 
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