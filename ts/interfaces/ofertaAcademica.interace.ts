interface Plantel {
  id: number;
  attributes: PlantelAttributes;
}

interface PlantelAttributes {
  nombrePlantel: string;
  tipoPlanel: string;
  link: string;
}

interface OfertaAcedemica {
  id: number;
  attributes: OfertaAcedemicaAttributes;
}

interface PlantelOptionalData {
  data: [attributes: PlantelAttributes];
}

interface OfertaAcedemicaAttributes {
  nombrePosgrado: string;
  claveOficial: string;
  modalidad: string;
  plantels?: PlantelOptionalData;
}

export type {
  Plantel,
  PlantelAttributes,
  OfertaAcedemica,
  OfertaAcedemicaAttributes,
};
