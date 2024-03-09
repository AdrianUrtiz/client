import { Fondo, Media } from "../ts/interfaces";

export const AVISOS = "/avisos";
export const NOTICIAS = "/noticias";
export const SORT_NOTICIAS = "&sort=fecha:desc";
export const NORMATECA = "/normatecas";
export const CONVOCATORIAS = "/convocatorias";
export const FILTER_CONVOCATORIAS = "&filters[tipoDeConvocatoria][$eq]=";
export const IMAGE_POPULATE = "?populate=imagen";
export const SITIOS_INTERES = "/sitios-interes-externos";
export const PAGINATION_LIMIT = "&pagination[limit]=";
export const PAGINATION_START = "&pagination[start]=";
export const SECCIONES_NORMATECA = "/secciones-normatecas";
export const PREGUNTAS_FRECUENTES = "/preguntas-frecuentes";
export const ORGANIGRAMA = "/organigramas";
export const DIRECTORIO = "/directorios";
export const PLANTELES = "/plantels";
export const OFERTA_ACADEMICA = "/oferta-academicas";
export const DIRECTORIO_PARAMS = "?populate[organigramas][populate]=imagen";
export const FILTER_DIRECTORIO_DEPARTAMENTO = "&filters[departamento][$eq]=";
export const SERVER = process.env.NEXT_PUBLIC_SERVER_API;
export const UPLOADS = process.env.NEXT_PUBLIC_SERVER_LINK;
export const NORMATECA_ACTUALIZADA = `${SERVER}${NORMATECA}?filters[normatecaHistorica][$eq]=false`;
export const NORMATECA_HISTORICA = `${SERVER}${NORMATECA}?filters[normatecaHistorica][$eq]=true`;
export const FILTER_NORMATECA_FILES = `${SERVER}${NORMATECA}?populate[documentos][populate]=*&filters[id][$eq]=`;
export const FILTER_NORMATECA_SECCIONES = `${SERVER}${SECCIONES_NORMATECA}?populate[documento][populate]=*&filters[normateca][id][$eq]=`;
export const CONVOCATORIAS_CONACYT_FONDO = "/convocatorias-conacyt-fondo";
export const CONVOCATORIAS_EXTERNAS_FONDO = "/convocatorias-externas-fondo";
export const CONVOCATORIAS_TECNM_FONDO = "/convocatorias-tec-nm-fondo";
export const CONVOCATORIAS_FONDO = "/convocatorias-fondo";
export const DIRECTORIO_FONDO = "/directorio-fondo";
export const NORMATECA_ACTUALIZADA_FONDO = "/normateca-actualizada-fondo";
export const NORMATECA_HISTORICA_FONDO = "/convocatorias-historica-fondo";
export const NOTICIAS_FONDO = "/noticias-fondo";
export const OFERTA_ACADEMICA_FONDO = "/oferta-academica-fondo";
export const ORGANIGRAMA_FONDO = "/organigrama-fondo";
export const SITIOS_INTERES_FONDO = "/sitios-interes-fondo";

const getStrapiMedia = (media: Media) => {
  let attributes;
  if (media.data?.length !== undefined) {
    attributes = media.data[0].attributes;
  } else if (media.data === null) {
    return { fileName: null, filePath: null };
  } else {
    attributes = media.data.attributes;
  }
  const { url } = attributes;
  const fileName = attributes.name;
  // const filePath = `${url}`;
  const filePath = `${UPLOADS}${url}`;
  return { fileName, filePath };
};

function getPageBackground(fondo: Fondo) {
  let pageBg;

  if (fondo) {
    const { attributes } = fondo;
    const { imagen } = attributes;
    const { filePath } = getStrapiMedia(imagen);
    pageBg = filePath;
  }

  return { pageBg };
}

const getDate = (date: string) => {
  const tmpDate = new Date(date.replace(/-/g, "/"));
  let dateArray = tmpDate.toDateString().split(" ");
  let [dayString, month, day, year] = dateArray;
  switch (month) {
    case "Jan":
      month = "Ene";
      break;
    case "Apr":
      month = "Abr";
      break;

    case "Aug":
      month = "Ago";
      break;

    case "Dec":
      month = "Dic";
      break;
  }
  return { dayString, month, day, year };
};

const downloadFile = async (filePath: any, name: any) => {
  const convocatoriaRes = await fetch(filePath);
  const convocatoria = await convocatoriaRes.blob();
  const url = window.URL.createObjectURL(convocatoria);
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", name);
  link.click();
};

const downloadCurrentFile = (file: any) => {
  const { fileName, filePath } = getStrapiMedia(file);
  downloadFile(filePath, fileName);
};

export {
  getStrapiMedia,
  downloadFile,
  downloadCurrentFile,
  getDate,
  getPageBackground,
};
