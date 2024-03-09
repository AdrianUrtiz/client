import React from "react";
import Link from "next/link";
import { getDate } from "../../utils/api";
import { Noticia } from "../../ts/interfaces";
import useStrapiMedia from "../../hooks/useStrapiMedia";

const NoticiasCard = ({ noticia }: { noticia: Noticia }) => {
  const { id, attributes } = noticia;
  const { titulo, descripcion, fecha, imagen } = attributes;

  const [mediaName, mediaPath] = useStrapiMedia(imagen);

  const { month, day } = getDate(fecha);

  return (
    <div className="w-[calc(100%-2.5rem)] sm:w-[calc(50%-2.5rem)] lg:w-[calc(33.3333333333%-2.5rem)] xl:w-[calc(25%-2.5rem)] sm:max-h-[36.5rem] flex flex-col rounded border-2 shadow-md cursor-pointer relative bg-white">
      <div className="absolute w-16 h-16 top-40 -translate-y-8 z-20 left-4 bg-darkBlue flex flex-col justify-center items-center">
        <p className="text-white font-semibold">{month}</p>
        <p className="text-white text-2xl font-bold">{day}</p>
      </div>
      <div className="w-full h-40 overflow-hidden flex justify-center items-center relative z-10">
        <img
          src={mediaPath}
          alt={mediaName}
          className="rounded-t w-full h-full object-cover object-top group-hover:scale-110 ease-in duration-300"
        />
      </div>
      <div className="w-full px-8 py-6 mt-8 relative">
        <p className="font-bold text-darkBlue">{titulo}</p>
        <p className="text-sm mt-4">{descripcion}</p>
      </div>
      <Link href="/noticias/[noticiaId]" as={`/noticias/${id}`}>
        <a className="w-1/2 text-center font-bold uppercase rounded text-sm py-2 mb-8 mt-auto border-2 ml-6 border-blue-900 text-blue-900 hover:bg-darkBlue hover:text-white transition-all duration-500">
          Leer más
        </a>
      </Link>
    </div>
  );
};

export default NoticiasCard;
