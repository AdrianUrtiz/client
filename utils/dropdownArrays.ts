const posgradoKey = "Filtrar por Programa";
const plantelKey = "Filtrar por Plantel";
const tipoPlantelKey = "Filtrar por Tipo de Plantel";
const modalidadProgramaKey = "Filtrar por Modalidad";

const programaArray = {
  id: "programasId",
  attributes: { nombrePosgrado: posgradoKey },
};

const plantelesArray = {
  id: "plantelId",
  attributes: { nombrePlantel: plantelKey },
};

const tipoPlantelArray = [tipoPlantelKey, "Descentralizado", "Federal"];

const modalidadProgramaArray = [
  modalidadProgramaKey,
  "Escolarizada",
  "No Escolarizada",
];

export {
  posgradoKey,
  plantelKey,
  tipoPlantelKey,
  modalidadProgramaKey,
  programaArray,
  plantelesArray,
  tipoPlantelArray,
  modalidadProgramaArray,
};
