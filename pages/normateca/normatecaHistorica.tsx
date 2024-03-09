import { Fragment } from "react";
import {
  getPageBackground,
  IMAGE_POPULATE,
  NORMATECA_HISTORICA,
  NORMATECA_HISTORICA_FONDO,
  SERVER,
} from "../../utils/api";
import { MEDIA } from "../../utils/media";
import HeadPage from "../../components/HeadPage";
import { GetServerSideProps, NextPage } from "next";
import type { Fondo, Normateca } from "../../ts/interfaces";
import NormatecaComponent from "../../components/Normateca/NormatecaComponent";

const NormatecaHistorica: NextPage<{
  normateca: Normateca[];
  fondo: Fondo;
}> = ({ normateca, fondo }) => {
  const { pageBg } = getPageBackground(fondo);

  return (
    <Fragment>
      <HeadPage headTitle="TecNM - DPII - Normateca Histórica" />

      <NormatecaComponent
        normateca={normateca}
        bgImage={pageBg ? pageBg : MEDIA.NORMATECA_BG}
      />
    </Fragment>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const [normatecaRes, normatecaFondoRes] = await Promise.all([
    fetch(NORMATECA_HISTORICA),
    fetch(`${SERVER}${NORMATECA_HISTORICA_FONDO}${IMAGE_POPULATE}`),
  ]);

  const [normateca, normatecaFondo] = await Promise.all([
    normatecaRes.json(),
    normatecaFondoRes.json(),
  ]);

  return {
    props: {
      normateca: normateca.data,
      fondo: normatecaFondo.data,
    },
  };
};

export default NormatecaHistorica;
