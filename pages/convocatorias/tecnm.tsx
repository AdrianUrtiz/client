import React, { Fragment } from "react";
import { MEDIA } from "../../utils/media";
import {
  CONVOCATORIAS,
  CONVOCATORIAS_TECNM_FONDO,
  FILTER_CONVOCATORIAS,
  getPageBackground,
  IMAGE_POPULATE,
  SERVER,
} from "../../utils/api";
import HeadPage from "../../components/HeadPage";
import { GetServerSideProps, NextPage } from "next";
import { Convocatoria, Fondo } from "../../ts/interfaces";
import Convocatorias from "../../components/Convocatorias/Convocatorias";

const ConvocatoriasTecNMPage: NextPage<{
  convocatoriasTecNM: Convocatoria[];
  fondo: Fondo;
}> = ({ convocatoriasTecNM, fondo }) => {
  const { pageBg } = getPageBackground(fondo);

  return (
    <Fragment>
      <HeadPage headTitle="TecNM - DPII - Convocatorias | TecNM" />

      <Convocatorias
        convocatorias={convocatoriasTecNM}
        title="Convocatorias TecNM"
        bgImage={pageBg ? pageBg : MEDIA.CONVOCATORIA_TECNM_BG}
      />
    </Fragment>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const [convocatoriasTecNMRes, convocatoriasTecNMFondoRes] = await Promise.all(
    [
      fetch(
        `${SERVER}${CONVOCATORIAS}${IMAGE_POPULATE},convocatoria${FILTER_CONVOCATORIAS}Convocatoria TecNM`
      ),
      fetch(`${SERVER}${CONVOCATORIAS_TECNM_FONDO}${IMAGE_POPULATE}`),
    ]
  );

  const [convocatoriasTecNM, convocatoriasTecNMFondo] = await Promise.all([
    convocatoriasTecNMRes.json(),
    convocatoriasTecNMFondoRes.json(),
  ]);

  return {
    props: {
      convocatoriasTecNM: convocatoriasTecNM.data,
      fondo: convocatoriasTecNMFondo.data,
    },
  };
};

export default ConvocatoriasTecNMPage;
