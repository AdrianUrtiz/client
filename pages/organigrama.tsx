import { Fragment } from "react";
import {
  getPageBackground,
  IMAGE_POPULATE,
  ORGANIGRAMA,
  ORGANIGRAMA_FONDO,
  SERVER,
} from "../utils/api";
import { MEDIA } from "../utils/media";
import HeadPage from "../components/HeadPage";
import { GetServerSideProps, NextPage } from "next";
import { Fondo, Organigrama } from "../ts/interfaces";
import OrganigramaComponent from "../components/Organigrama/OrganigramaComponent";

const OrganigramaPage: NextPage<{
  organigrama: Organigrama[];
  fondo: Fondo;
}> = ({ organigrama, fondo }) => {
  const { pageBg } = getPageBackground(fondo);

  return (
    <Fragment>
      <HeadPage headTitle="TecNM - DPII - Directorio" />

      <OrganigramaComponent
        organigrama={organigrama}
        bgImage={pageBg ? pageBg : MEDIA.ORGANIGRAMA_BG}
      />
    </Fragment>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const [organigramaRes, organigramaFondoRes] = await Promise.all([
    fetch(`${SERVER}${ORGANIGRAMA}${IMAGE_POPULATE},directorio`),
    fetch(`${SERVER}${ORGANIGRAMA_FONDO}${IMAGE_POPULATE}`),
  ]);

  const [organigrama, organigramaFondo] = await Promise.all([
    organigramaRes.json(),
    organigramaFondoRes.json(),
  ]);

  return {
    props: {
      organigrama: organigrama.data,
      fondo: organigramaFondo.data,
    },
  };
};

export default OrganigramaPage;
