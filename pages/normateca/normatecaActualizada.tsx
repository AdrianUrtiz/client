import { Fragment } from "react";
import { MEDIA } from "../../utils/media";
import HeadPage from "../../components/HeadPage";
import { GetServerSideProps, NextPage } from "next";
import { Fondo, Normateca } from "../../ts/interfaces";
import {
  getPageBackground,
  IMAGE_POPULATE,
  NORMATECA_ACTUALIZADA,
  NORMATECA_ACTUALIZADA_FONDO,
  SERVER,
} from "../../utils/api";
import NormatecaComponent from "../../components/Normateca/NormatecaComponent";

const NormatecaActualizada: NextPage<{
  normateca: Normateca[];
  fondo: Fondo;
}> = ({ normateca, fondo }) => {
  const { pageBg } = getPageBackground(fondo);

  return (
    <Fragment>
      <HeadPage headTitle="TecNM - DPII - Normateca Actualizada" />

      <NormatecaComponent
        normateca={normateca}
        bgImage={pageBg ? pageBg : MEDIA.NORMATECA_BG}
      />
    </Fragment>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const [normatecaRes, normatecaFondoRes] = await Promise.all([
    fetch(NORMATECA_ACTUALIZADA),
    fetch(`${SERVER}${NORMATECA_ACTUALIZADA_FONDO}${IMAGE_POPULATE}`),
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

export default NormatecaActualizada;
