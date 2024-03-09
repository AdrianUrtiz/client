import { Media } from "../global.interface";

interface SitioInteres {
  id: number;
  attributes: SitioInteresAttributes;
}

interface SitioInteresAttributes {
  titulo: string;
  link: string;
  descripcion: string;
  imagen: Media;
}

export type { SitioInteres, SitioInteresAttributes };
