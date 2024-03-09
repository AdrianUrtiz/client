import { Media } from "./global.interface";

interface Convocatoria {
  id: number;
  attributes: ConvocatoriaAttributes;
}

interface ConvocatoriaAttributes {
  titulo: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  fechaDePublicacion: string;
  tipoDeConvocatoria: string;
  link: string;
  estatus: boolean;
  imagen: Media;
  convocatoria: Media;
}

export type { Convocatoria, ConvocatoriaAttributes };
