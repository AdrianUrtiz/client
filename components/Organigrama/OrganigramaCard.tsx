import React, { Fragment, useEffect, useState } from "react";
import { MEDIA } from "../../utils/media";
import useToggle from "../../hooks/useToggle";
import { getStrapiMedia } from "../../utils/api";
import OrganigramaModal from "./OrganigramaModal";
import { Organigrama } from "../../ts/interfaces/organigrama.interface";

function OrganigramaCard({ personal }: { personal: Organigrama }) {
  const [isOpen, setIsOpen] = useToggle(false);

  const { attributes } = personal;
  const { nombre, cargo, biografia, directorio, imagen } = attributes;

  const [directorioAtributos, setDirectorioAtributos] = useState<any>({
    correo: undefined,
    extension: undefined,
    departamento: "",
  });

  let name: string | null = "profile";
  let imagePath: string | null = MEDIA.PROFILE_IMG;

  if (imagen.data !== null) {
    let { filePath, fileName } = getStrapiMedia(imagen);
    name = fileName;
    imagePath = filePath;
  }

  useEffect(() => {
    if (directorio.data !== null) {
      setDirectorioAtributos({ ...directorio.data.attributes });
    }
  }, []);

  return (
    <Fragment>
      <div className="w-[calc(100%-2.5rem)] sm:w-[calc(50%-2.5rem)] lg:w-[calc(33.3333333333%-2.5rem)] xl:w-[calc(25%-2.5rem)] sm:max-h-[40rem] flex flex-col rounded border-2  shadow-md relative bg-white">
        <div className="w-full h-40 flex justify-center items-center relative z-10 my-2">
          <img
            src={`${imagePath ? imagePath : ""}`}
            alt={`${name ? name : ""}`}
            className="rounded-full w-32 h-32 object-cover object-top border-4 border-darkBlue"
          />
        </div>
        <div className="w-full px-8 pb-6 relative flex flex-col items-center">
          <p className="font-bold text-darkBlue text-center">{nombre}</p>
          <p className="text-sm mt-4 text-center">{cargo}</p>
        </div>
        <button
          type="button"
          onClick={setIsOpen}
          className="rounded-md px-5 py-2 mx-auto mt-auto mb-6 border-2 font-bold uppercase text-xs border-blue-900 text-blue-900 hover:bg-darkBlue hover:text-white transition-all duration-500"
        >
          Más información
        </button>
        <div className="w-full max-h-60 bg-slate-100 rounded-b flex flex-col sm:flex-row sm:justify-center px-3 pt-1 pb-2">
          <div className="w-full break-words sm:w-1/2 flex flex-col text-center">
            <p className="font-bold text-darkBlue my-1">Email</p>
            <p className="text-sm font-semibold">
              {directorioAtributos?.correo}
            </p>
          </div>
          <div className="w-full break-words sm:w-1/2 flex flex-col text-center">
            <p className="font-bold text-darkBlue my-1">Extensión</p>
            <p className="text-sm font-semibold">
              {directorioAtributos?.extension}
            </p>
          </div>
        </div>
      </div>
      {biografia && (
        <OrganigramaModal
          isOpen={isOpen}
          toggleModal={setIsOpen}
          nombre={nombre}
          cargo={cargo}
          biografia={biografia}
          name={`${name ? name : ""}`}
          imagePath={`${imagePath ? imagePath : ""}`}
        />
      )}
    </Fragment>
  );
}

export default OrganigramaCard;
