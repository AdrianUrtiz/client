import { Fragment } from "react";
import Pagination from "../Pagination";
import PagePagination from "../PagePagination";
import CardsContainer from "../CardsContainer";
import SectionComponent from "../SectionComponent";
import { SitioInteres } from "../../ts/interfaces";
import usePagination from "../../hooks/usePagination";
import SitioInteresCard from "../HomePage/SitiosInteres/SitioInteresCard";

function SitiosInteres({ sitiosInteres, bgImage }: { sitiosInteres: SitioInteres[], bgImage:string }) {
  let { next, prev, jump, currentData, currentPage, maxPage } = usePagination(
    sitiosInteres,
    8
  );

  function renderSitiosInteres() {
    return currentData().map(({ id, attributes }) => {
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
    <Fragment>
      <SectionComponent sectionProps="py-0 px-0" containerProps="max-w-8xl">
        <div className="w-full h-64 lg:h-80 relative flex flex-col justify-center items-center">
          <img
            src={bgImage}
            alt="directorio.jpg"
            className="w-full h-full object-cover object-center brightness-[65%]"
          />
          <h1 className="text-white text-3xl md:text-4xl font-bold absolute">
            Sitios de Interés
          </h1>
        </div>
      </SectionComponent>
      <SectionComponent sectionProps="bg-pageBg" containerProps="md:px-5">
        <PagePagination
          next={next}
          prev={prev}
          currentPage={currentPage}
          maxPage={maxPage}
        />
        <CardsContainer>{renderSitiosInteres()}</CardsContainer>
        <Pagination
          next={next}
          prev={prev}
          currentPage={currentPage}
          data={sitiosInteres}
          jump={jump}
          maxPage={maxPage}
        />
      </SectionComponent>
    </Fragment>
  );
}

export default SitiosInteres;
