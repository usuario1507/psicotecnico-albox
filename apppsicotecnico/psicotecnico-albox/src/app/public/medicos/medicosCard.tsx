import { IMedicos } from "@/app/interfaces/IMedicos";
import { FC } from "react";
import {Card, CardBody, CardFooter, Image } from "@nextui-org/react";


interface Props {
    medico: IMedicos;
}

export const medicoCard:FC<Props> = ({ medico }) => {
    return (
        <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
        {medico.map((medico, id_medico) => (
          <Card shadow="sm" key={id_medico} isPressable onPress={() => console.log("item pressed")}>
            <CardBody className="overflow-visible p-0">
              <Image
                shadow="sm"
                radius="lg"
                width="100%"
                alt={medico.foto}
                className="w-full object-cover h-[140px]"
                src={medico.foto}
              />
            </CardBody>
            <CardFooter className="text-small justify-between">
              <b>{medico.nombre}</b>
              <p className="text-default-500">{medico.nombre}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    );
}

