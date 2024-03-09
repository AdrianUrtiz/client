import React, { Fragment } from "react";
import HeadPage from "../components/HeadPage";
import {
  getPageBackground,
  IMAGE_POPULATE,
  SERVER,
  SITIOS_INTERES,
  SITIOS_INTERES_FONDO,
} from "../utils/api";
import { MEDIA } from "../utils/media";
import { GetServerSideProps, NextPage } from "next";
import { Fondo, SitioInteres } from "../ts/interfaces";
import SitiosInteres from "../components/SitiosInteres/SitiosInteres";

const SitiosInteresPage: NextPage<{
  sitiosInteres: SitioInteres[];
  fondo: Fondo;
}> = ({ sitiosInteres, fondo }) => {
  const { pageBg } = getPageBackground(fondo);

  return (
    <Fragment>
      <HeadPage headTitle="TecNM - DPII - Sitios Interes" />

      <SitiosInteres
        sitiosInteres={sitiosInteres}
        bgImage={pageBg ? pageBg : MEDIA.NOTICIAS_BG}
      />
    </Fragment>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const [sitiosInteresRes, sitiosInteresFondoRes] = await Promise.all([
    fetch(`${SERVER}${SITIOS_INTERES}${IMAGE_POPULATE}`),
    fetch(`${SERVER}${SITIOS_INTERES_FONDO}${IMAGE_POPULATE}`),
  ]);

  const [sitiosInteres, sitiosInteresFondo] = await Promise.all([
    sitiosInteresRes.json(),
    sitiosInteresFondoRes.json(),
  ]);

  return {
    props: {
      sitiosInteres: sitiosInteres.data,
      fondo: sitiosInteresFondo.data,
    },
  };
};

export default SitiosInteresPage;
