import React from 'react'
import Faqs from './Faqs'
import Avisos from './Avisos'
import SitiosInteres from './SitiosInteres/SitiosInteres'
import UltimasNoticias from './UltimasNoticias/UltimasNoticias'
import { Aviso, FAQ, Noticia, SitioInteres } from '../../ts/interfaces'
import LineasInvestigacion from './LineaInvestigacion/LineasInvestigacion'

interface HomePageProps {
  avisos: Aviso[]
  noticias: Noticia[]
  preguntasFrecuentes: FAQ[]
  sitiosInteres: SitioInteres[]
}

function HomePage({
  avisos,
  noticias,
  preguntasFrecuentes,
  sitiosInteres,
}: HomePageProps) {
  return (
    <main>
      <Avisos avisos={avisos} />
      <UltimasNoticias noticias={noticias} />
      <LineasInvestigacion />
      <SitiosInteres sitiosInteres={sitiosInteres} />
      <Faqs preguntasFrecuentes={preguntasFrecuentes} />
    </main>
  )
}

export default HomePage
