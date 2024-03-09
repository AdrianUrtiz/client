import React, { Fragment, useEffect, useState } from "react";
import { showIcon } from "../../utils/helpers";
import { Normateca } from "../../ts/interfaces";
import {
  downloadCurrentFile,
  FILTER_NORMATECA_FILES,
  FILTER_NORMATECA_SECCIONES,
} from "../../utils/api";
import {
  Documento,
  SeccionNormateca,
} from "../../ts/interfaces/normateca.interfaces";
import SectionComponent from "../SectionComponent";
import NormatecaDropdown from "./NormatecaDropdown";
import { Listbox, Transition } from "@headlessui/react";

function NormatecaComponent({
  normateca,
  bgImage,
}: {
  normateca: Normateca[];
  bgImage: string;
}) {
  const [selected, setSelected] = useState<any>(normateca[0]);
  const [secciones, setSecciones] = useState<SeccionNormateca[]>([]);
  const [normatecaDocs, setNormatecaDocs] = useState<Documento[]>([]);

  const fetchSecciones = async () => {
    const seccionesRes = await fetch(
      `${FILTER_NORMATECA_SECCIONES}${selected.id}`
    );
    const secciones = await seccionesRes.json();
    setSecciones(secciones.data);
  };

  const fetchNormatecaDocs = async () => {
    const normatecaDocsRes = await fetch(
      `${FILTER_NORMATECA_FILES}${selected.id}`
    );
    const normatecaDocs = await normatecaDocsRes.json();
    const docs = normatecaDocs.data[0].attributes.documentos;
    setNormatecaDocs(docs);
  };

  const fetchNormatecaData = async () => {
    if (selected) {
      fetchSecciones();
      fetchNormatecaDocs();
    }
  };

  useEffect(() => {
    if (selected) fetchNormatecaData();
  }, []);

  return (
    <Fragment>
      <SectionComponent sectionProps="py-0 px-0" containerProps="max-w-8xl">
        <div className="w-full h-64 lg:h-80 relative flex flex-col justify-center items-center mb-8 md:mb-8 max-w-8xl">
          <img
            src={bgImage}
            alt="convocatorias.jpg"
            className="w-full h-full object-cover object-center brightness-[65%]"
          />
          <h1 className="text-white text-3xl md:text-4xl font-bold absolute text-center">
            Normateca del TecNM
          </h1>
        </div>
      </SectionComponent>

      <SectionComponent sectionProps="pt-0" containerProps="px-5">
        <div className="mb-6 sm:mb-10">
          <p className="sm:font-medium md:font-semibold text-center">
            La normateca es una herramienta para la difusión y consulta de los
            acuerdos, normas, reglamentos, lineamientos y demás disposiciones de
            aplicación general en las dependencias y entidades de la
            Administración Pública Federal.
          </p>
        </div>
        <div className="sm:px-16 flex flex-col items-center md:flex-row md:justify-between mb-8">
          <div className="w-full md:w-96">
            <Listbox value={selected} onChange={setSelected}>
              <div className="relative mt-1 border-2 border-darkBlue rounded-lg">
                <Listbox.Button className="relative w-full py-3 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
                  <span className="block">
                    {selected
                      ? selected.attributes.nombreDireccion
                      : "No se ha creado ninguna dirección todavía"}
                  </span>
                  <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <i className="bx bx-expand-vertical"></i>
                  </span>
                </Listbox.Button>
                <Transition
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    {normateca.map((singleNormateca) => (
                      <Listbox.Option
                        key={singleNormateca.id}
                        className={({ active }) =>
                          `cursor-default select-none relative py-2 pl-10 pr-4 ${
                            active
                              ? "text-darkBlue bg-slate-200"
                              : "text-gray-900"
                          }`
                        }
                        value={singleNormateca}
                      >
                        {({ selected }) => (
                          <Fragment>
                            <span
                              className={`block truncate ${
                                selected ? "font-medium" : "font-normal"
                              }`}
                            >
                              {singleNormateca.attributes.nombreDireccion}
                            </span>
                            {selected ? (
                              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-darkBlue">
                                <i className="bx bx-check text-xl"></i>
                              </span>
                            ) : null}
                          </Fragment>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </Listbox>
          </div>
          <button
            className="bg-darkBlue text-white px-9 py-3 rounded-lg mt-5 md:mt-0"
            onClick={fetchNormatecaData}
          >
            Consultar
          </button>
        </div>
        <div className="my-5 px-2 xl:px-28 ">
          {normatecaDocs.map(
            ({ id, nombreDocumento, documento }: Documento) => {
              const fileExt = documento.data.attributes.ext;

              return (
                <p
                  key={id}
                  className="px-4 py-3 mt-3 mb-4 mx-1 font-semibold rounded-md text-black
            border-2 border-darkBlue flex items-center hover:cursor-pointer hover:bg-gray-100"
                  onClick={() => downloadCurrentFile(documento)}
                >
                  <div className="h-4">{showIcon(fileExt)}</div>
                  {nombreDocumento}
                </p>
              );
            }
          )}
        </div>
        <div className="my-5 px-2 xl:px-28 ">
          {secciones.map((seccion: SeccionNormateca) => (
            <NormatecaDropdown key={seccion.id} seccion={seccion} />
          ))}
        </div>
      </SectionComponent>
    </Fragment>
  );
}

export default NormatecaComponent;
