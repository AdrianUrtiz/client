interface FAQ {
  id: number;
  attributes: FAQAttributes;
}

interface FAQAttributes {
  pregunta: string;
  respuesta: string;
}

export type { FAQ, FAQAttributes };
