/* eslint-disable @next/next/no-img-element */
import React from 'react'
import useStrapiMedia from '../../../hooks/useStrapiMedia'
import { SitioInteresAttributes } from '../../../ts/interfaces'

const SitioInteresCard = ({
  titulo,
  descripcion,
  link,
  imagen,
}: SitioInteresAttributes) => {
  const [fileName, filePath] = useStrapiMedia(imagen)

  return (
    <div className='w-[calc(100%-2.5rem)] sm:w-[calc(50%-2.5rem)] lg:w-[calc(33.3333333333%-2.5rem)] xl:w-[calc(25%-2.5rem)] sm:max-h-[36rem] flex flex-col rounded-md border-2 shadow-2xl hover:border-gray-300 cursor-pointer group bg-white hover:scale-[1.03] ease-in duration-300'>
      <div className='w-full h-28 relative overflow-hidden'>
        <img
          src={filePath}
          alt={fileName}
          className='rounded-t w-full h-full object-fill'
        />
      </div>
      <div className='w-full p-5 relative'>
        <h1 className='font-bold text-sky-800 text-lg uppercase mb-5'>
          {titulo}
        </h1>
        <p
          className=' text-md'
          style={{
            display: '-webkit-box',
            WebkitLineClamp: 5,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
          title={descripcion}>
          {descripcion}
        </p>
      </div>
      <a
        href={link}
        target='_blank'
        rel='noreferrer noopener'
        className='w-1/2 text-center font-bold uppercase rounded text-sm py-2 mb-6 mt-auto border-2 ml-6 border-blue-900 text-blue-900 hover:bg-darkBlue hover:text-white transition-all duration-500'>
        Ingresar
      </a>
    </div>
  )
}

export default SitioInteresCard
