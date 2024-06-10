import React, { useState } from "react"
import {RadioGroup, Radio} from "@nextui-org/react";
import {Input} from "@nextui-org/react";
import {Button} from "@nextui-org/react";

export default function Contact() {
    return (
      <div>
        <h1 className="container text-2xl mx-auto mt-4">Formulario de Contacto</h1>
        <form method="POST" action="/public/contacto" className="container mx-auto mt-4">
          <div>
          <RadioGroup
      label="¿Sobre que te quieres interesar?"
      orientation="horizontal" className="container mx-auto mt-4"  color="secondary" defaultValue="¿Sobre que te quieres interesar?" 
    >
      <Radio value="Licencias" type="checkbox">Licencias</Radio>
      <Radio value="Lesiones" type="checkbox" >Lesiones</Radio>
      <Radio value="Transporte (Carnés)" type="checkbox">Transporte (Carnés)</Radio>
    </RadioGroup>
          </div> 
          <div className="container mx-auto mt-6 flex w-full flex-wrap md:flex-nowrap gap-4">
            <Input type="nombre" label="Nombre:" />
            <Input type="apellidos" label="Apellidos:"/>
          </div>
          <div className="container mx-auto mt-6 flex w-full flex-wrap md:flex-nowrap gap-4">
            <Input type="correo_electronico" label="Correo_electronico:" />
            <Input type="telefono" label="Telefono:"/>
          </div>
          <div>
            <label>Comentarios</label>
            <textarea name="Comentarios"></textarea>
          </div>
          <Button color="primary" className="container mx-auto mt-7">Enviar</Button>
        </form>
      </div>  
      
    )
}

