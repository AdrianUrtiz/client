import React, { Fragment } from "react";
import {
  getPageBackground,
  IMAGE_POPULATE,
  OFERTA_ACADEMICA,
  OFERTA_ACADEMICA_FONDO,
  PLANTELES,
  SERVER,
} from "../utils/api";
import { MEDIA } from "../utils/media";
import HeadPage from "../components/HeadPage";
import { GetServerSideProps, NextPage } from "next";
import { Fondo, OfertaAcedemica, Plantel } from "../ts/interfaces";
import PlanEstudiosComponent from "../components/PlanEstudios/PlanEstudiosComponent";

interface PlanEstudiosProps {
  planteles: Plantel[];
  ofertaAcademica: OfertaAcedemica[];
  fondo: Fondo;
}

const PlanEstudiosPage: NextPage<PlanEstudiosProps> = ({
  planteles,
  ofertaAcademica,
  fondo,
}) => {
  const { pageBg } = getPageBackground(fondo);

  return (
    <Fragment>
      <HeadPage headTitle="TecNM - DPII - Posgrados" />

      <PlanEstudiosComponent
        planteles={planteles}
        ofertaAcademica={ofertaAcademica}
        bgImage={pageBg ? pageBg : MEDIA.ORGANIGRAMA_BG}
      />
    </Fragment>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const [plantelesRes, ofertaAcademicaRes, ofertaAcademicaFondoRes] =
    await Promise.all([
      fetch(`${SERVER}${PLANTELES}`),
      fetch(`${SERVER}${OFERTA_ACADEMICA}?populate=plantels`),
      fetch(`${SERVER}${OFERTA_ACADEMICA_FONDO}${IMAGE_POPULATE}`),
    ]);

  let [planteles, ofertaAcademica, ofertaAcademicaFondo] = await Promise.all([
    plantelesRes.json(),
    ofertaAcademicaRes.json(),
    ofertaAcademicaFondoRes.json(),
  ]);

  return {
    props: {
      planteles: planteles.data,
      ofertaAcademica: ofertaAcademica.data,
      fondo: ofertaAcademicaFondo.data,
    },
  };
};

export default PlanEstudiosPage;
