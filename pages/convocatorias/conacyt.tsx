import React, { Fragment } from "react";
import { MEDIA } from "../../utils/media";
import {
  CONVOCATORIAS,
  CONVOCATORIAS_CONACYT_FONDO,
  FILTER_CONVOCATORIAS,
  getPageBackground,
  IMAGE_POPULATE,
  SERVER,
} from "../../utils/api";
import HeadPage from "../../components/HeadPage";
import { GetServerSideProps, NextPage } from "next";
import { Convocatoria, Fondo } from "../../ts/interfaces";
import Convocatorias from "../../components/Convocatorias/Convocatorias";

const ConvocatoriasCONACYTPage: NextPage<{
  convocatoriasCONACYT: Convocatoria[];
  fondo: Fondo;
}> = ({ convocatoriasCONACYT, fondo }) => {
  const { pageBg } = getPageBackground(fondo);

  return (
    <Fragment>
      <HeadPage headTitle="TecNM - DPII - Convocatorias | Conacyt" />

      <Convocatorias
        convocatorias={convocatoriasCONACYT}
        title="Convocatorias CONACYT"
        bgImage={pageBg ? pageBg : MEDIA.CONVOCATORIA_CONACYT_BG}
      />
    </Fragment>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const [convocatoriasCONACYTRes, convocatoriasCONACYTFondoRes] =
    await Promise.all([
      fetch(
        `${SERVER}${CONVOCATORIAS}${IMAGE_POPULATE},convocatoria${FILTER_CONVOCATORIAS}Convocatoria CONACYT`
      ),
      fetch(`${SERVER}${CONVOCATORIAS_CONACYT_FONDO}${IMAGE_POPULATE}`),
    ]);

  const [convocatoriasCONACYT, convocatoriasCONACYTFondo] = await Promise.all([
    convocatoriasCONACYTRes.json(),
    convocatoriasCONACYTFondoRes.json(),
  ]);

  return {
    props: {
      convocatoriasCONACYT: convocatoriasCONACYT.data,
      fondo: convocatoriasCONACYTFondo.data,
    },
  };
};

export default ConvocatoriasCONACYTPage;
