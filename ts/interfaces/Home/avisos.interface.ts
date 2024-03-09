import { Media } from "../global.interface";

interface Aviso {
  id: number;
  attributes: AvisoAttributes;
}

interface AvisoAttributes {
  link: string;
  imagen: Media;
}

export type { Aviso, AvisoAttributes };
