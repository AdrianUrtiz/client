import { Fragment } from "react";
import {
  DIRECTORIO,
  DIRECTORIO_FONDO,
  DIRECTORIO_PARAMS,
  getPageBackground,
  IMAGE_POPULATE,
  SERVER,
} from "../utils/api";
import { MEDIA } from "../utils/media";
import HeadPage from "../components/HeadPage";
import { GetServerSideProps, NextPage } from "next";
import { Directorio, Fondo } from "../ts/interfaces";
import DirectorioComponent from "../components/Directorio/DirectorioComponent";

const DirectorioPage: NextPage<{
  directorio: Directorio[];
  fondo: Fondo;
}> = ({ directorio, fondo }) => {
  const { pageBg } = getPageBackground(fondo);

  return (
    <Fragment>
      <HeadPage headTitle="TecNM - DPII - Directorio" />

      <DirectorioComponent
        directorio={directorio}
        bgImage={pageBg ? pageBg : MEDIA.DIRECTORIO_BG}
      />
    </Fragment>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const [directorioRes, directorioFondoRes] = await Promise.all([
    fetch(`${SERVER}${DIRECTORIO}${DIRECTORIO_PARAMS}`),
    fetch(`${SERVER}${DIRECTORIO_FONDO}${IMAGE_POPULATE}`),
  ]);

  const [directorio, directorioFondo] = await Promise.all([
    directorioRes.json(),
    directorioFondoRes.json(),
  ]);
  return {
    props: {
      directorio: directorio.data,
      fondo: directorioFondo.data,
    },
  };
};

export default DirectorioPage;
