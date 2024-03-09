import { Fragment } from "react";
import {
  SERVER,
  CONVOCATORIAS,
  IMAGE_POPULATE,
  CONVOCATORIAS_FONDO,
  getPageBackground,
} from "../utils/api";
import { MEDIA } from "../utils/media";
import HeadPage from "../components/HeadPage";
import { GetServerSideProps, NextPage } from "next";
import { Convocatoria, Fondo } from "../ts/interfaces";
import Convocatorias from "../components/Convocatorias/Convocatorias";

const ConvocatoriasPage: NextPage<{
  convocatorias: Convocatoria[];
  fondo: Fondo;
}> = ({ convocatorias, fondo }) => {
  const { pageBg } = getPageBackground(fondo);

  return (
    <Fragment>
      <HeadPage headTitle="TecNM - DPII - Convocatorias" />

      <Convocatorias
        convocatorias={convocatorias}
        title="Convocatorias"
        bgImage={pageBg ? pageBg : MEDIA.CONVOCATORIA_BG}
      />
    </Fragment>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const [convocatoriasRes, convocatoriaFondoRes] = await Promise.all([
    fetch(`${SERVER}${CONVOCATORIAS}${IMAGE_POPULATE},convocatoria`),
    fetch(`${SERVER}${CONVOCATORIAS_FONDO}${IMAGE_POPULATE}`),
  ]);

  const [convocatorias, convocatoriaFondo] = await Promise.all([
    convocatoriasRes.json(),
    convocatoriaFondoRes.json(),
  ]);

  return {
    props: {
      convocatorias: convocatorias.data,
      fondo: convocatoriaFondo.data,
    },
  };
};

export default ConvocatoriasPage;
