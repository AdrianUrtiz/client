/* eslint-disable @next/next/no-img-element */
import { Fragment } from 'react'
import Pagination from '../Pagination'
import CardsContainer from '../CardsContainer'
import { Convocatoria } from '../../ts/interfaces'
import SectionComponent from '../SectionComponent'
import ConvocatoriasCard from './ConvocatoriasCard'
import usePagination from '../../hooks/usePagination'
import useWindowSize from '../../hooks/useWindowSize'
import {ModalSolicitud} from './ModalSolicitud'

interface ConvocatoriasComponent {
  convocatorias: Convocatoria[]
  title: string
  bgImage: string
}

function Convocatorias({
  convocatorias,
  title,
  bgImage,
}: ConvocatoriasComponent) {
  const { width } = useWindowSize()
  let { next, prev, jump, currentData, currentPage, maxPage } = usePagination(
    convocatorias,
    (width as number) >= 640 ? 8 : 4,
  )

  const renderConvocatorias = () => {
    return currentData().map((convocatoria) => {
      return (
        <ConvocatoriasCard key={convocatoria.id} convocatoria={convocatoria} />
      )
    })
  }

  return (
    <Fragment>
      <ModalSolicitud />
      <SectionComponent sectionProps='pt-0 px-0' containerProps='max-w-8xl'>
        <div className='w-full h-64 lg:h-80 relative flex flex-col justify-center items-center'>
          <img
            src={bgImage}
            alt='convocatorias.jpg'
            className='w-full h-full object-cover object-center brightness-[65%]'
          />
          <h1 className='text-white text-3xl md:text-4xl font-bold absolute text-center'>
            {title}
          </h1>
        </div>
      </SectionComponent>

      <SectionComponent sectionProps='pt-0' containerProps='px-5'>
        <CardsContainer>{renderConvocatorias()}</CardsContainer>
        <Pagination
          next={next}
          prev={prev}
          currentPage={currentPage}
          data={currentData()}
          jump={jump}
          maxPage={maxPage}
        />
      </SectionComponent>
    </Fragment>
  )
}

export default Convocatorias
