import React, { Fragment } from "react";
import { MEDIA } from "../../utils/media";
import {
  CONVOCATORIAS,
  CONVOCATORIAS_EXTERNAS_FONDO,
  FILTER_CONVOCATORIAS,
  getPageBackground,
  IMAGE_POPULATE,
  SERVER,
} from "../../utils/api";
import HeadPage from "../../components/HeadPage";
import { GetServerSideProps, NextPage } from "next";
import { Convocatoria, Fondo } from "../../ts/interfaces";
import Convocatorias from "../../components/Convocatorias/Convocatorias";

const ConvocatoriasExternasPage: NextPage<{
  convocatoriasExternas: Convocatoria[];
  fondo: Fondo;
}> = ({ convocatoriasExternas, fondo }) => {
  const { pageBg } = getPageBackground(fondo);

  return (
    <Fragment>
      <HeadPage headTitle="TecNM - DPII - Convocatorias | Externas" />

      <Convocatorias
        convocatorias={convocatoriasExternas}
        title="Convocatorias Externas"
        bgImage={pageBg ? pageBg : MEDIA.CONVOCATORIA_BG}
      />
    </Fragment>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const [convocatoriasExternasRes, convocatoriasExternasFondoRes] =
    await Promise.all([
      fetch(
        `${SERVER}${CONVOCATORIAS}${IMAGE_POPULATE},convocatoria${FILTER_CONVOCATORIAS}Convocatoria Externa`
      ),
      fetch(`${SERVER}${CONVOCATORIAS_EXTERNAS_FONDO}${IMAGE_POPULATE}`),
    ]);

  const [convocatoriasExternas, convocatoriasExternasFondo] = await Promise.all(
    [convocatoriasExternasRes.json(), convocatoriasExternasFondoRes.json()]
  );

  return {
    props: {
      convocatoriasExternas: convocatoriasExternas.data,
      fondo: convocatoriasExternasFondo.data,
    },
  };
};

export default ConvocatoriasExternasPage;
