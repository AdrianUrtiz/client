/* eslint-disable @next/next/no-img-element */
import JSSoup from 'jssoup'
import { Fragment } from 'react'
import MarkdownIt from 'markdown-it'
import { GetServerSideProps } from 'next'
import { Noticia } from '../../ts/interfaces'
import HeadPage from '../../components/HeadPage'
import useStrapiMedia from '../../hooks/useStrapiMedia'
import SectionComponent from '../../components/SectionComponent'
import { IMAGE_POPULATE, NOTICIAS, SERVER, UPLOADS } from '../../utils/api'

function NoticiaIndividual({ noticia }: { noticia: Noticia }) {
  const { titulo, imagen, texto } = noticia.attributes
  const [mediaName, mediaPath] = useStrapiMedia(imagen)
  const md = new MarkdownIt()
  const htmlContent = md.render(texto)
  const soup = new JSSoup(htmlContent)

  soup.contents.forEach((element: any) => {
    const children = element.nextElement

    if (children.name == 'img') {
      if (element.contents.length == 1) {
        children.attrs.class = 'm-auto'
        // children.attrs.src = children.attrs.src;
        children.attrs.src = `${UPLOADS}${children.attrs.src}`
      } else {
        element.contents.forEach((child: any) => {
          child.attrs.src = child.attrs.src
        })
        element.attrs.class = 'flex justify-center flex-wrap gap-5'
      }
    }
  })

  return (
    <Fragment>
      <HeadPage headTitle={`TecNM - DPII - Noticias | ${titulo}`} />

      <SectionComponent sectionProps='px-32'>
        <h1 className='text-4xl text-darkBlue text-center font-semibold'>
          {titulo}
        </h1>
        <div className='flex flex-col md:flex-row justify-center items-center my-6 md:p-10 gap-10'>
          <img
            src={mediaPath}
            alt={mediaName}
            className='m-auto max-h-96 max-w-md md:max-w-lg object-cover object-center'
          />
          <div
            className='prose prose-cyan max-w-none
          prose-headings:text-center prose-headings:text-3xl prose-headings:font-semibold 
          prose-headings:text-darkBlue prose-p:text-justify
          prose-img:max-h-60 prose-img:md:max-w-md prose-img:my-0
          px-5 md:px-4 2xl:px-8'
            dangerouslySetInnerHTML={{ __html: soup.prettify() }}></div>
        </div>
      </SectionComponent>
    </Fragment>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const noticiaRes = await fetch(
    `${SERVER}${NOTICIAS}/${context.params?.noticiaId}${IMAGE_POPULATE}`,
  )
  const noticia = await noticiaRes.json()

  return {
    props: {
      noticia: noticia.data,
    },
  }
}

export default NoticiaIndividual
