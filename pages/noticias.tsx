import { Fragment } from "react";
import { Fondo, Noticia } from "../ts/interfaces";
import HeadPage from "../components/HeadPage";
import { NextPage, GetServerSideProps } from "next";
import Noticias from "../components/Noticias/Noticias";
import {
  getPageBackground,
  IMAGE_POPULATE,
  NOTICIAS,
  NOTICIAS_FONDO,
  SERVER,
  SORT_NOTICIAS,
} from "../utils/api";
import { MEDIA } from "../utils/media";

const NoticiasPage: NextPage<{
  noticias: Noticia[];
  fondo: Fondo;
}> = ({ noticias, fondo }) => {
  const { pageBg } = getPageBackground(fondo);

  return (
    <Fragment>
      <HeadPage headTitle="TecNM - DPII - Noticias" />

      <Noticias
        noticias={noticias}
        bgImage={pageBg ? pageBg : MEDIA.NOTICIAS_BG}
      />
    </Fragment>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const [noticiasRes, noticiasFondoRes] = await Promise.all([
    fetch(`${SERVER}${NOTICIAS}${IMAGE_POPULATE}${SORT_NOTICIAS}`),
    fetch(`${SERVER}${NOTICIAS_FONDO}${IMAGE_POPULATE}`),
  ]);

  const [noticias, noticiasFondo] = await Promise.all([
    noticiasRes.json(),
    noticiasFondoRes.json(),
  ]);

  return {
    props: {
      noticias: noticias.data,
      fondo: noticiasFondo.data,
    },
  };
};

export default NoticiasPage;
