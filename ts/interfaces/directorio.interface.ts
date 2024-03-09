import { OrganigramaData } from "./organigrama.interface";

interface DirectorioData {
  data: Directorio | null;
}

interface Directorio {
  id: number;
  attributes: DirectorioAttributes;
}

interface DirectorioAttributes {
  departamento: string;
  correo: string;
  extension: string;
  organigramas: OrganigramaData;
}

export type { Directorio, DirectorioData, DirectorioAttributes };
