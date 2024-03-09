import React, { Fragment } from "react";
import { OfertaAcedemica } from "../../ts/interfaces";

interface PlanEstudiosTableProps {
  ofertaAcademicaState: OfertaAcedemica[];
}

function PlanEstudiosTable({ ofertaAcademicaState }: PlanEstudiosTableProps) {
  return (
    <Fragment>
      <table className="w-full table-fixed mt-8">
        <thead className="text-white">
          <tr className="w-full bg-darkBlue text-center">
            <th className="py-5">Plantel</th>
            <th>Programa</th>
            <th>Clave Oficial</th>
            <th>Modalidad</th>
            <th>Web</th>
          </tr>
        </thead>
        <tbody>
          {ofertaAcademicaState
            ? ofertaAcademicaState.map(({ attributes }) => {
                const planteles = attributes.plantels;
                return planteles?.data.map((plantel: any) => {
                  return (
                    <tr
                      key={plantel.id}
                      className="min-h-full h-auto odd:bg-blue-700/10 even:bg-white border-y-2 text-center"
                    >
                      <td className="p-8">
                        {plantel.attributes.nombrePlantel}
                      </td>
                      <td>{attributes.nombrePosgrado}</td>
                      <td>
                        {attributes.claveOficial
                          ? attributes.claveOficial
                          : "-"}
                      </td>
                      <td>{attributes.modalidad}</td>
                      <td>
                        <a
                          href={plantel.attributes.link}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="bx bx-link-alt text-darkBlue text-xl"></i>
                        </a>
                      </td>
                    </tr>
                  );
                });
              })
            : null}
        </tbody>
      </table>
      {ofertaAcademicaState.length === 0 && (
        <p className="text-center py-5 bg-blue-700/10 text-darkBlue font-semibold">
          No se encontraron resultados para esta búsqueda
        </p>
      )}
    </Fragment>
  );
}

export default PlanEstudiosTable;
