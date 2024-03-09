import React, { Fragment, useState } from "react";
import { MEDIA } from "../../utils/media";
import {
  DIRECTORIO,
  DIRECTORIO_PARAMS,
  FILTER_DIRECTORIO_DEPARTAMENTO,
  SERVER,
} from "../../utils/api";
import Pagination from "../Pagination";
import DirectorioCard from "./DirectorioCard";
import CardsContainer from "../CardsContainer";
import SectionComponent from "../SectionComponent";
import usePagination from "../../hooks/usePagination";
import { Listbox, Transition } from "@headlessui/react";
import { Directorio } from "../../ts/interfaces/directorio.interface";

function DirectorioComponent({ directorio, bgImage }: { directorio: Directorio[], bgImage:string }) {
  const [selected, setSelected] = useState<any>("Todos");
  const [listDepartamento, setListDepartamento] = useState(directorio);
  let { next, prev, jump, currentData, currentPage, setCurrentPage, maxPage } =
    usePagination(listDepartamento, 6);
  const renderDirectorio = () => {
    return currentData().map((departamento) => {
      return (
        <DirectorioCard key={departamento.id} departamento={departamento} />
      );
    });
  };

  const fetchDirectorioData = async () => {
    if (selected !== "Todos") {
      const departamentoRes = await fetch(
        `${SERVER}${DIRECTORIO}${DIRECTORIO_PARAMS}${FILTER_DIRECTORIO_DEPARTAMENTO}${selected.attributes.departamento}`
      );
      const departamento = await departamentoRes.json();
      setListDepartamento(departamento.data);
    } else {
      setListDepartamento(directorio);
    }
    setCurrentPage(1);
  };

  return (
    <Fragment>
      <SectionComponent sectionProps="py-0 px-0" containerProps="max-w-8xl">
        <div className="w-full h-64 lg:h-80 relative flex flex-col justify-center items-center">
          <img
            src={bgImage}
            alt="directorio.jpg"
            className="w-full h-full object-cover object-center brightness-[65%]"
          />
          <h1 className="text-white text-3xl md:text-4xl font-bold absolute">
            Directorio
          </h1>
        </div>
      </SectionComponent>
      <SectionComponent>
        <div className="px-5 sm:px-4 flex flex-col items-center md:flex-row md:justify-between mb-8">
          <div className="w-full md:w-96">
            <Listbox value={selected} onChange={setSelected}>
              <div className="relative mt-1 border-2 border-darkBlue rounded-lg">
                <Listbox.Button className="relative w-full py-3 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-darkBlue focus-visible:ring-offset-2 focus-visible:border-darkBlue sm:text-sm">
                  <span className="block">
                    {selected !== "Todos"
                      ? selected.attributes.departamento
                      : "Todos"}
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
                  <Listbox.Options className="absolute z-20 w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    <Listbox.Option
                      className={({ active }) =>
                        `cursor-default select-none relative py-2 pl-10 pr-4 ${
                          active
                            ? "text-darkBlue bg-slate-200"
                            : "text-gray-900"
                        }`
                      }
                      value={"Todos"}
                    >
                      {({ selected }) => (
                        <>
                          <span
                            className={`block truncate ${
                              selected ? "font-medium" : "font-normal"
                            }`}
                          >
                            Todos
                          </span>
                          {selected ? (
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-darkBlue">
                              <i className="bx bx-check text-xl"></i>
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>

                    {directorio.map((singleDirectorio) => (
                      <Listbox.Option
                        key={singleDirectorio.id}
                        className={({ active }) =>
                          `cursor-default select-none relative py-2 pl-10 pr-4 ${
                            active
                              ? "text-darkBlue bg-slate-200"
                              : "text-gray-900"
                          }`
                        }
                        value={singleDirectorio}
                      >
                        {({ selected }) => (
                          <>
                            <span
                              className={`block truncate ${
                                selected ? "font-medium" : "font-normal"
                              }`}
                            >
                              {singleDirectorio.attributes.departamento}
                            </span>
                            {selected ? (
                              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-darkBlue">
                                <i className="bx bx-check text-xl"></i>
                              </span>
                            ) : null}
                          </>
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
            onClick={fetchDirectorioData}
          >
            Consultar
          </button>
        </div>
        <CardsContainer>{renderDirectorio()}</CardsContainer>
        <Pagination
          next={next}
          prev={prev}
          jump={jump}
          data={listDepartamento}
          currentPage={currentPage}
          maxPage={maxPage}
        />
      </SectionComponent>
    </Fragment>
  );
}

export default DirectorioComponent;
