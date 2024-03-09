import { Media } from "./global.interface";
interface Fondo {
  id: number;
  attributes: FondoAttributes;
}

interface FondoAttributes {
  imagen: Media;
}

export type { Fondo, FondoAttributes };
