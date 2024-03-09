import React, { Fragment, useEffect, useState } from "react";
import { MEDIA } from "../../utils/media";
import { getStrapiMedia } from "../../utils/api";
import { Directorio } from "../../ts/interfaces/directorio.interface";
import { Organigrama } from "../../ts/interfaces/organigrama.interface";

function DirectorioCard({ departamento }: { departamento: Directorio }) {
  const { attributes } = departamento;
  const {
    departamento: nombreDepartamento,
    correo,
    extension,
    organigramas,
  } = attributes;

  const [organigrama, setOrganigrama] = useState<Organigrama[]>([]);

  useEffect(() => {
    if (organigramas.data.length !== 0) {
      setOrganigrama(organigramas.data);
    }
  }, [organigrama]);

  return (
    <Fragment>
      {organigramas.data.length !== 0 ? (
        organigrama.map(({ id, attributes }: Organigrama) => {
          const { fileName, filePath } = getStrapiMedia(attributes.imagen);
          return (
            <div
              key={id}
              className="w-[calc(100%-2.5rem)] lg:w-[calc(50%-2.5rem)] xl:w-[calc(33.3333333333%-2.5rem)] sm:max-h-[40rem] flex rounded border-2  shadow-md relative bg-white"
            >
              <div className="hidden w-36 sm:flex justify-center items-center relative z-10">
                <img
                  src={filePath ? filePath : MEDIA.PROFILE_IMG}
                  alt={fileName ? fileName : "persona"}
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <div className="w-full sm:w-[calc(100%-9rem)] flex flex-col">
                <div className="w-full px-2 py-2 mt-1 relative flex flex-col items-center">
                  <p className="font-semibold">{attributes.nombre}</p>
                  <p className="text-sm mt-1 text-center font-bold text-sky-800">
                    {nombreDepartamento}
                  </p>
                </div>
                <div className="w-full max-h-60 mt-auto rounded-b flex flex-col px-3 pt-1 pb-2">
                  <div className="w-full break-all flex items-center">
                    <p className="mr-2 font-bold basis-24 text-darkBlue my-1">
                      Email
                    </p>
                    <p className="text-sm font-semibold basis-[calc(100%-6rem)]">
                      {correo}
                    </p>
                  </div>
                  <div className="w-full break-all flex items-center">
                    <p className="mr-2 font-bold basis-24 text-darkBlue my-1">
                      Extensión
                    </p>
                    <p className="text-sm font-semibold basis-[calc(100%-6rem)]">
                      {extension}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div className="w-[calc(100%-2.5rem)] lg:w-[calc(50%-2.5rem)] xl:w-[calc(33.3333333333%-2.5rem)] sm:max-h-[40rem] flex rounded border-2  shadow-md relative bg-white">
          <div className="hidden w-36 sm:flex justify-center items-center relative z-10">
            <img
              src={MEDIA.PROFILE_IMG}
              alt={"persona"}
              className="h-full w-full object-cover object-top"
            />
          </div>
          <div className="w-full sm:w-[calc(100%-9rem)] flex flex-col">
            <div className="w-full px-2 py-2 mt-1 relative flex flex-col items-center">
              <p className="text-sm mt-1 text-center font-bold text-sky-800">
                {nombreDepartamento}
              </p>
            </div>
            <div className="w-full max-h-60 mt-auto rounded-b flex flex-col px-3 pt-1 pb-2">
              <div className="w-full break-all flex items-center">
                <p className="mr-2 font-bold basis-24 text-darkBlue my-1">
                  Email
                </p>
                <p className="text-sm font-semibold basis-[calc(100%-6rem)]">
                  {correo}
                </p>
              </div>
              <div className="w-full break-all flex items-center">
                <p className="mr-2 font-bold basis-24 text-darkBlue my-1">
                  Extensión
                </p>
                <p className="text-sm font-semibold basis-[calc(100%-6rem)]">
                  {extension}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
}

export default DirectorioCard;
