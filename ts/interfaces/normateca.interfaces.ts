import { Media } from "./global.interface";

interface SeccionNormatecaData {
  data: SeccionNormateca[] | null;
}

interface SeccionNormateca {
  id: number;
  attributes: SeccionNormatecaAttributes;
}

interface SeccionNormatecaAttributes {
  nombreSeccion: string;
  documento: Documento[];
  normateca: NormatecaData;
}

interface NormatecaData {
  data: Normateca[] | null;
}

interface Normateca {
  id: number;
  attributes: NormatecaAttributes;
}

interface NormatecaAttributes {
  nombreDireccion: string;
  normatecaHistorica: boolean;
  documentos: Documento[];
}

interface Documento {
  id: number;
  nombreDocumento: string;
  documento: Media;
}

export type {
  Normateca,
  NormatecaAttributes,
  NormatecaData,
  SeccionNormateca,
  SeccionNormatecaAttributes,
  SeccionNormatecaData,
  Documento,
};
