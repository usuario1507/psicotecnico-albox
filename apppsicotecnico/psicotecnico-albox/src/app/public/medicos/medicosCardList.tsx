import { IMedicos } from "@/app/interfaces/IMedicos";
import Link from "next/link";
import { FC } from "react";
import { MedicoCard } from "./medicosCard";

interface Props {
    medicos: IMedicos[];
};

export const LibrosCardList:FC<Props> = ({ medicos }) => {
    return (
        <section className="flex fle-row flex-wrap">
            {
             medicos.map( (medico) => ( 
                <article key={medico.id_medico} className="basis-1/4 p-2">
                   <Link key={medico.id_medico } href ={`/public/medicos/${medico.id_medico}`}>
                     <MedicoCard key={medico.id_medico} medico = { medico } />
                   </Link>
                </article>
             ))
            }

            
        </section>
    )
}