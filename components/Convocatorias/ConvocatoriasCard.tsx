import React from "react";
import Link from "next/link";
import { Convocatoria } from "../../ts/interfaces";
import useStrapiMedia from "../../hooks/useStrapiMedia";
import { downloadCurrentFile, getDate } from "../../utils/api";

function ConvocatoriasCard({ convocatoria }: { convocatoria: Convocatoria }) {
  const { attributes } = convocatoria;
  const {
    titulo,
    tipoDeConvocatoria,
    estatus,
    fechaDePublicacion,
    imagen,
    link,
    convocatoria: convocatoriaPdf,
  } = attributes;

  const [name, imagePath] = useStrapiMedia(imagen);
  const { month, day, year } = getDate(fechaDePublicacion);

  return (
    <div className="w-[calc(100%-2.5rem)] sm:w-[calc(50%-2.5rem)] lg:w-[calc(33.3333333333%-2.5rem)] xl:w-[calc(25%-2.5rem)] sm:max-h-[36rem] bg-white shadow-lg rounded-md group cursor-pointer">
      <div className="h-24 w-full relative flex justify-center items-center text-white font-medium text-lg tracking-wide overflow-hidden rounded-t-md ">
        <p className="absolute z-20 text-center">{tipoDeConvocatoria}</p>
        <img
          src={imagePath}
          alt={name}
          className="h-full w-full object-cover object-center brightness-75 rounded-t-md group-hover:scale-110 ease-in duration-300"
        />
      </div>
      <div className="w-full flex flex-col relative px-8 py-6">
        <p className="text-right font-medium text-gray-600">
          {day} {month} {year}
        </p>
        <p className="font-bold text-darkBlue text-center my-4">{titulo}</p>
        <p className="font-medium text-black-900 text-center my-4">{`Estatus: ${
          estatus ? "Abierta" : "Cerrada"
        }`}</p>
        <div className="w-full flex flex-col justify-center items-center my-4">
          <a
            onClick={() => downloadCurrentFile(convocatoriaPdf)}
            className="rounded-md w-3/4 py-2 px-2 border-2 border-blue-900 text-blue-900 hover:bg-darkBlue hover:text-white transition-all duration-500"
          >
            <span className="w-full flex justify-center items-center font-bold text-sm text-center">
              <i className="bx bx-file text-lg mr-2"></i>
              Convocatoria
            </span>
          </a>
          {link && (
            <a
              href={link}
              className="rounded-md mt-2 w-3/4 py-2 px-2 border-2 border-blue-900 text-blue-900 hover:bg-darkBlue hover:text-white transition-all duration-500"
            >
              <span className="w-full flex justify-center items-center font-bold text-sm text-center">
                <i className="bx bx-link-alt text-lg mr-2"></i>
                Enlace convocatoria
              </span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ConvocatoriasCard;
