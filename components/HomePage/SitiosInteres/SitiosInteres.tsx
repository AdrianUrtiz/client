import React from "react";
import Link from "next/link";
import SectionTitle from "../SectionTitle";
import SitioInteresCard from "./SitioInteresCard";
import CardsContainer from "../../CardsContainer";
import { SITIOS_INTERES } from "../../../utils/api";
import SectionComponent from "../../SectionComponent";
import { SitioInteres } from "../../../ts/interfaces";

const SitiosInteres = ({
  sitiosInteres,
}: {
  sitiosInteres: SitioInteres[];
}) => {
  function renderSitiosInteres() {
    return sitiosInteres?.map(({ id, attributes }) => {
      return (
        <SitioInteresCard
          key={id}
          titulo={attributes.titulo}
          descripcion={attributes.descripcion}
          link={attributes.link}
          imagen={attributes.imagen}
        />
      );
    });
  }

  return (
    <SectionComponent>
      <SectionTitle title="Sitios de Interés" />

      <CardsContainer>{renderSitiosInteres()}</CardsContainer>

      <div className="w-full flex justify-center">
        <Link href={SITIOS_INTERES}>
          <a className="py-2 w-52 text-center rounded-md font-bold uppercase text-sm mt-12 border-2 border-blue-900 text-white bg-darkBlue hover:bg-white hover:text-blue-900 transition-all duration-500">
            Más sitios interés
          </a>
        </Link>
      </div>
    </SectionComponent>
  );
};

export default SitiosInteres;
