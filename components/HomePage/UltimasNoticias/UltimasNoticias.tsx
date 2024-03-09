import React from "react";
import Link from "next/link";
import SectionTitle from "../SectionTitle";
import { NOTICIAS } from "../../../utils/api";
import { Noticia } from "../../../ts/interfaces";
import CardsContainer from "../../CardsContainer";
import SectionComponent from "../../SectionComponent";
import NoticiasCard from "../../Noticias/NoticiasCard";

function UltimasNoticias({ noticias }: { noticias: Noticia[] }) {
  function renderNoticias() {
    return noticias?.map((noticia) => {
      return <NoticiasCard key={noticia.id} noticia={noticia} />;
    });
  }

  return (
    <SectionComponent>
      <SectionTitle title="Noticias" />
      <CardsContainer>{renderNoticias()}</CardsContainer>
      <div className="w-full flex justify-center">
        <Link href={NOTICIAS}>
          <a className="py-2 w-52 text-center rounded-md font-bold uppercase text-sm mt-12 border-2 border-blue-900 text-white bg-darkBlue hover:bg-white hover:text-blue-900 transition-all duration-500">
            Más noticias
          </a>
        </Link>
      </div>
    </SectionComponent>
  );
}

export default UltimasNoticias;
