import React, { Fragment } from "react";
import Pagination from "../Pagination";
import CardsContainer from "../CardsContainer";
import PagePagination from "../PagePagination";
import OrganigramaCard from "./OrganigramaCard";
import SectionComponent from "../SectionComponent";
import usePagination from "../../hooks/usePagination";
import { Organigrama } from "../../ts/interfaces/organigrama.interface";

function OrganigramaComponent({ organigrama, bgImage }: { organigrama: Organigrama[], bgImage:string }) {
  let { next, prev, jump, currentData, currentPage, maxPage } = usePagination(
    organigrama,
    8
  );

  const renderOrganigrama = () => {
    return currentData().map((personal) => {
      return <OrganigramaCard key={personal.id} personal={personal} />;
    });
  };
  return (
    <Fragment>
      <SectionComponent sectionProps="py-0 px-0" containerProps="max-w-8xl">
        <div className="w-full h-64 lg:h-80 relative flex flex-col justify-center items-center">
          <img
            src={bgImage}
            alt="organigrama.jpg"
            className="w-full h-full object-cover object-center brightness-[75%]"
          />
          <h1 className="text-white text-3xl md:text-4xl font-bold absolute">
            Organigrama
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
        <CardsContainer styles="my-8">{renderOrganigrama()}</CardsContainer>
        <Pagination
          next={next}
          prev={prev}
          currentPage={currentPage}
          data={organigrama}
          jump={jump}
          maxPage={maxPage}
        />
      </SectionComponent>
    </Fragment>
  );
}

export default OrganigramaComponent;
