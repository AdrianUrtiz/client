import { Media } from "../global.interface";

interface Noticia {
  id: number;
  attributes: NoticiaAttributes;
}

interface NoticiaAttributes {
  titulo: string;
  texto: string;
  fecha: string;
  descripcion: string;
  imagen: Media;
}

export type { Noticia, NoticiaAttributes };
