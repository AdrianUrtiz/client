import { Fragment } from "react";
import Pagination from "../Pagination";
import NoticiasCard from "./NoticiasCard";
import { Noticia } from "../../ts/interfaces";
import CardsContainer from "../CardsContainer";
import PagePagination from "../PagePagination";
import SectionComponent from "../SectionComponent";
import usePagination from "../../hooks/usePagination";

function Noticias({
  noticias,
  bgImage,
}: {
  noticias: Noticia[];
  bgImage: string;
}) {
  let { next, prev, jump, currentData, currentPage, maxPage } = usePagination(
    noticias,
    12
  );

  function renderNoticias() {
    return currentData().map((noticia) => {
      return <NoticiasCard key={noticia.id} noticia={noticia} />;
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
            Noticias
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
        <CardsContainer>{renderNoticias()}</CardsContainer>
        <Pagination
          next={next}
          prev={prev}
          currentPage={currentPage}
          data={noticias}
          jump={jump}
          maxPage={maxPage}
        />
      </SectionComponent>
    </Fragment>
  );
}

export default Noticias;
