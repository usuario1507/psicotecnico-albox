import { FC } from "react";
import { IMedico } from "@/app/interfaces/IMedicos"; // Asegúrate de ajustar la importación según tu estructura de archivos
import { Image } from "@nextui-org/react";
interface Props {
  medico: IMedico;
}

export const PlantillaMedico: FC<Props> = ({ medico }) => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="md:w-1/2">
          <div
            className="h-64 md:h-auto md:w-96 bg-cover bg-center"
            style={{ backgroundImage: `url(${medico.foto})` }}
            title={`Avatar de ${medico.nombre} ${medico.apellido}`}
          >
        <Image
        src={medico.foto}
        className="h-auto max-w-sm shadow-lg dark:shadow-black/30"
        alt={"foto del Medico"} />
          </div>
        </div>

        <div className="md:w-1/2 p-8">
          <p className="text-sm text-gray-600 flex items-center">
            <svg
              className="fill-current text-gray-500 w-3 h-3 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
            </svg>
            {medico.especialidad}
          </p>
          <div className="text-gray-900 font-bold text-xl mb-4">
            {medico.apellido}, {medico.nombre}
          </div>
          <p className="text-sm text-gray-700 mb-4">
            <strong>Correo Electrónico:</strong> {medico.correo_electronico}
          </p>
          <p className="text-sm text-gray-700 mb-4">
            <strong>Teléfono:</strong> {medico.telefono}
          </p>
          <p className="text-sm text-gray-700 mb-4">
            <strong>Género:</strong> {medico.genero}
          </p>
          <p className="text-sm text-gray-700 mb-4">
            <strong>ID Médico:</strong> {medico.id_medico}
          </p>
        </div>
      </div>
    </div>
  );
};