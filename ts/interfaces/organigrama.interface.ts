import { DirectorioData } from "./directorio.interface";
import { Media } from "./global.interface";

interface OrganigramaData  {
  data: Organigrama[] | [];
};

interface Organigrama {
  id: number;
  attributes: OrganigramaAttributes;
}

interface OrganigramaAttributes {
  nombre: string;
  cargo: string;
  biografia: string;
  imagen: Media;
  directorio: DirectorioData;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
}

export type { Organigrama, OrganigramaData, OrganigramaAttributes };
