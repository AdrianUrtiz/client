/* eslint-disable @next/next/no-img-element */
import React, { Fragment, useReducer, useState } from "react";
import {
  filterByNameAndTipo,
  filterDoubleQuery,
  filterSingleQuery,
  filterTripleQuery,
} from "../../utils/posgradosQuery";
import {
  modalidadProgramaArray,
  plantelesArray,
  programaArray,
  tipoPlantelArray,
} from "../../utils/dropdownArrays";
import Pagination from "../Pagination";
import ListboxOption from "../ListboxOption";
import PlanEstudiosCard from "./PlanEstudiosCard";
import SectionComponent from "../SectionComponent";
import PlanEstudiosTable from "./PlanEstudiosTable";
import useWindowSize from "../../hooks/useWindowSize";
import usePagination from "../../hooks/usePagination";
import { OFERTA_ACADEMICA, SERVER } from "../../utils/api";
import { OfertaAcedemica, Plantel } from "../../ts/interfaces";
import planEstudiosReducer from "../../reducers/planEstudiosReducer";
import PlanEstudiosSearchDropdown from "./PlanEstudiosSearchDropdown";

interface PlanEstudiosProps {
  planteles: Plantel[];
  ofertaAcademica: OfertaAcedemica[];
  bgImage: string;
}

function PlanEstudiosComponent({
  planteles,
  ofertaAcademica,
  bgImage,
}: PlanEstudiosProps) {
  const initialState = {
    programa: null,
    modalidad: null,
    plantel: null,
    tipoPlantel: null,
  };
  const { width } = useWindowSize();
  const [ofertaAcademicaState, setOfertaAcademicaState] =
    useState<OfertaAcedemica[]>(ofertaAcademica);
  const [state, dispatch] = useReducer(planEstudiosReducer, initialState);
  let { next, prev, jump, currentData, currentPage, maxPage } = usePagination(
    ofertaAcademicaState,
    (width as number) >= 640 ? 3 : 2
  );

  const fetchPosgrados = async () => {
    let counter = -1;
    let posgradosFilter = `${SERVER}${OFERTA_ACADEMICA}?populate=plantels`;

    if (state.programa)
      posgradosFilter += `&filters[$and][${(counter += 1)}][nombrePosgrado][$eq]=${
        state.programa
      }`;

    if (state.modalidad)
      posgradosFilter += `&filters[$and][${(counter += 1)}][modalidad][$eq]=${
        state.modalidad
      }`;

    if (state.plantel)
      posgradosFilter += `&filters[$and][${(counter += 1)}][plantels][nombrePlantel][$eq]=${
        state.plantel
      }`;

    if (state.tipoPlantel)
      posgradosFilter += `&filters[$and][${(counter += 1)}][plantels][tipoPlantel][$eq]=${
        state.tipoPlantel
      }`;

    const posgradosRes = await fetch(posgradosFilter);
    let posgrados = await posgradosRes.json();

    switch (counter) {
      case 0:
        posgrados = filterSingleQuery(posgrados, state);
        break;
      case 1:
        posgrados = filterDoubleQuery(posgrados, state);
        break;
      case 2:
        posgrados = filterTripleQuery(posgrados, state);
        break;
      case 3:
        posgrados = filterByNameAndTipo(posgrados, state);
        break;
      default:
        break;
    }

    setOfertaAcademicaState(posgrados.data);
  };

  return (
    <Fragment>
      <SectionComponent sectionProps="py-0 px-0" containerProps="max-w-8xl">
        <div className="w-full h-64 lg:h-80 relative flex flex-col justify-center items-center">
          <img
            src={bgImage}
            alt="organigrama.jpg"
            className="w-full h-full object-cover object-center brightness-[75%]"
          />
          <h1 className="text-white text-3xl md:text-4xl font-bold absolute">
            Todos los Posgrados del TecNM
          </h1>
        </div>
      </SectionComponent>

      <SectionComponent containerProps="px-4 2xl:px-16">
        <div className="grid gap-5 grid-cols-1 sm:grid-cols-2">
          <PlanEstudiosSearchDropdown
            dispatch={dispatch}
            dropDownItems={[programaArray, ...ofertaAcademica]}
            type="PROGRAMA"
            searchText="Programa"
            payloadKey="programa"
          >
            {[programaArray, ...ofertaAcademica].map(({ id, attributes }) => (
              <ListboxOption
                key={id}
                value={attributes.nombrePosgrado}
                listboxText={attributes.nombrePosgrado}
              />
            ))}
          </PlanEstudiosSearchDropdown>
          <PlanEstudiosSearchDropdown
            dispatch={dispatch}
            dropDownItems={modalidadProgramaArray}
            type="MODALIDAD"
            searchText="Modalidad"
            payloadKey="modalidad"
          >
            {modalidadProgramaArray.map((modalidad, id) => (
              <ListboxOption
                key={id}
                value={modalidad}
                listboxText={modalidad}
              />
            ))}
          </PlanEstudiosSearchDropdown>
          <PlanEstudiosSearchDropdown
            dispatch={dispatch}
            dropDownItems={[plantelesArray, ...planteles]}
            type="PLANTEL"
            searchText="Plantel"
            payloadKey="plantel"
          >
            {[plantelesArray, ...planteles].map(({ id, attributes }) => (
              <ListboxOption
                key={id}
                value={attributes.nombrePlantel}
                listboxText={attributes.nombrePlantel}
              />
            ))}
          </PlanEstudiosSearchDropdown>
          <PlanEstudiosSearchDropdown
            dispatch={dispatch}
            dropDownItems={tipoPlantelArray}
            type="TIPO_PLANTEL"
            searchText="Tipo de Plantel"
            payloadKey="tipoPlantel"
          >
            {tipoPlantelArray.map((tipoPlantel, id) => (
              <ListboxOption
                key={id}
                value={tipoPlantel}
                listboxText={tipoPlantel}
              />
            ))}
          </PlanEstudiosSearchDropdown>
          <button
            className="col-span-1 sm:col-span-2 bg-darkBlue text-white px-9 py-3 rounded-lg mt-5 justify-self-end"
            onClick={fetchPosgrados}
          >
            Consultar
          </button>
        </div>
        {(width as number) >= 640 ? (
          <PlanEstudiosTable ofertaAcademicaState={currentData()} />
        ) : (
          <PlanEstudiosCard ofertaAcademicaState={currentData()} />
        )}
        <Pagination
          next={next}
          prev={prev}
          currentPage={currentPage}
          data={currentData()}
          jump={jump}
          maxPage={maxPage}
        />
      </SectionComponent>
    </Fragment>
  );
}

export default PlanEstudiosComponent;
