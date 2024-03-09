import { Fragment } from "react";
import {
  SERVER,
  AVISOS,
  NOTICIAS,
  PREGUNTAS_FRECUENTES,
  SITIOS_INTERES,
  IMAGE_POPULATE,
  SORT_NOTICIAS,
  PAGINATION_LIMIT,
} from "../utils/api";
import HeadPage from "../components/HeadPage";
import HomePage from "../components/HomePage/HomePage";
import type { GetServerSideProps, NextPage } from "next";
import { Aviso, FAQ, Noticia, SitioInteres } from "../ts/interfaces";

interface HomeProps {
  avisos: Aviso[];
  noticias: Noticia[];
  preguntasFrecuentes: FAQ[];
  sitiosInteres: SitioInteres[];
}

const Home: NextPage<HomeProps> = ({
  avisos,
  noticias,
  preguntasFrecuentes,
  sitiosInteres,
}) => {
  return (
    <Fragment>
      <HeadPage headTitle="TecNM - DPII" />

      <HomePage
        avisos={avisos}
        noticias={noticias}
        preguntasFrecuentes={preguntasFrecuentes}
        sitiosInteres={sitiosInteres}
      />
    </Fragment>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const [avisosRes, noticiasRes, preguntasFrecuentesRes, sitiosInteresRes] =
    await Promise.all([
      fetch(`${SERVER}${AVISOS}${IMAGE_POPULATE}`),
      fetch(
        `${SERVER}${NOTICIAS}${IMAGE_POPULATE}${PAGINATION_LIMIT}4${SORT_NOTICIAS}`
      ),
      fetch(`${SERVER}${PREGUNTAS_FRECUENTES}`),
      fetch(`${SERVER}${SITIOS_INTERES}${IMAGE_POPULATE}${PAGINATION_LIMIT}4`),
    ]);

  const [avisos, noticias, preguntasFrecuentes, sitiosInteres] =
    await Promise.all([
      avisosRes.json(),
      noticiasRes.json(),
      preguntasFrecuentesRes.json(),
      sitiosInteresRes.json(),
    ]);

  return {
    props: {
      avisos: avisos.data,
      noticias: noticias.data,
      preguntasFrecuentes: preguntasFrecuentes.data,
      sitiosInteres: sitiosInteres.data,
    },
  };
};

export default Home;
