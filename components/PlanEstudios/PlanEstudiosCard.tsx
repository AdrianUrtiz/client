import React from "react";
import { OfertaAcedemica } from "../../ts/interfaces";

interface PlanEstudiosTableProps {
  ofertaAcademicaState: OfertaAcedemica[];
}

function cardRow(
  rowTitle: string,
  rowContent: string | JSX.Element,
  rowProps?: string,
  rowTextprops?: string
) {
  return (
    <div className={`relative border-b-[1px] border-slate-500 ${rowProps}`}>
      <span
        className={`${rowTextprops} flex items-center px-3 justify-center bg-darkBlue text-white absolute top-0 w-[40%] right-[60%] bottom-0`}
      >
        {rowTitle}
      </span>
      <span className="relative overflow-auto w-[60%] right-0 left-[40%] flex items-center pl-2 py-4">
        {rowContent}
      </span>
    </div>
  );
}

function PlanEstudiosCard({ ofertaAcademicaState }: PlanEstudiosTableProps) {
  return (
    <div className="mt-8">
      {ofertaAcademicaState
        ? ofertaAcademicaState.map(({ attributes }) => {
            const planteles = attributes.plantels;
            return planteles?.data.map((plantel: any) => {
              return (
                <div
                  key={plantel.id}
                  className="odd:bg-blue-700/10 even:bg-white mb-4 flex flex-col rounded-md"
                >
                  {cardRow(
                    "Plantel",
                    plantel.attributes.nombrePlantel,
                    "",
                    "rounded-tl-md"
                  )}
                  {cardRow("Programa", attributes.nombrePosgrado)}
                  {cardRow(
                    "Clave Oficial",
                    attributes.claveOficial ? attributes.claveOficial : "-"
                  )}
                  {cardRow("Modalidad", attributes.modalidad)}
                  {cardRow(
                    "Web",
                    <a href={plantel.attributes.link} rel="noreferrer" target="_blank">
                      <i className="bx bx-link-alt text-darkBlue text-xl"></i>
                    </a>,
                    "border-none",
                    "rounded-bl-md "
                  )}
                </div>
              );
            });
          })
        : null}
      {ofertaAcademicaState.length === 0 && (
        <p className="text-center py-5 bg-blue-700/10 text-darkBlue font-semibold rounded-md">
          No se encontraron resultados para esta búsqueda
        </p>
      )}
    </div>
  );
}

export default PlanEstudiosCard;
