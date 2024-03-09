import {
  modalidadProgramaKey,
  plantelKey,
  posgradoKey,
  tipoPlantelKey,
} from "../utils/dropdownArrays";

const planEstudiosReducer = (state: any, action: any) => {
  switch (action.type) {
    case "PROGRAMA":
      const { programa } = action.payload;

      let nombrePosgrado;
      if (programa.attributes) {
        nombrePosgrado = programa.attributes.nombrePosgrado;
      } else {
        nombrePosgrado = programa;
      }

      return {
        ...state,
        programa: nombrePosgrado === posgradoKey ? "" : nombrePosgrado,
      };

    case "MODALIDAD":
      const { modalidad } = action.payload;

      return {
        ...state,
        modalidad: modalidad === modalidadProgramaKey ? "" : modalidad,
      };

    case "PLANTEL":
      const { plantel } = action.payload;

      let nombrePlantel;
      if (plantel.attributes) {
        nombrePlantel = plantel.attributes.nombrePlantel;
      } else {
        nombrePlantel = plantel;
      }

      return {
        ...state,
        plantel: nombrePlantel === plantelKey ? "" : nombrePlantel,
      };

    case "TIPO_PLANTEL":
      const { tipoPlantel } = action.payload;

      return {
        ...state,
        tipoPlantel: tipoPlantel === tipoPlantelKey ? "" : tipoPlantel,
      };

    default:
      break;
  }
};

export default planEstudiosReducer;
