import { IUsuario } from "@/app/interfaces/IUsuario";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { FC } from "react";







interface Props {
    usuarios: IUsuario[],
    columnas: String[];
}

export const UsuariosGrid:FC<Props> = ( {usuarios, columnas} ) => {
    return (
        <>
        
        <div className="flex justify-center">
        <div className="text-center text-black">
        <h1 className="text-2xl font-bold">Tabla de Usuarios</h1>
        <Link color="foreground" href="/admin/usuarios/new">
           <Button color="primary">Crear Usuario</Button>
        </Link>


           <table className="border-collapse border border-slate-400">
               <thead>
                <tr className="bg-cyan-300">

                </tr>
               </thead>
           </table>
          </div>   
        </div>
        </>
    )
}