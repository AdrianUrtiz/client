import React from 'react'
import SectionTitle from '../SectionTitle'
import CardsContainer from '../../CardsContainer'
import SectionComponent from '../../SectionComponent'
import LineaInvestigacionCard from './LineaInvestigacionCard'

function LineasInvestigacion() {
  return (
    <SectionComponent sectionProps='gradient-bg' containerProps='text-white'>
      <SectionTitle
        title='Líneas de Investigación Prioritarias'
        properties='capitalize'
        color='text-white'
      />
      <p className='text-center -mt-3 mb-8 font-semibold text-base sm:text-lg'>
        Las áreas estratégicas del TecNM en las cuales se concentran las líneas
        de investigación son:
      </p>
      <CardsContainer styles='p-x-2 gap-y-8 gap-x-5 justify-between'>
        <LineaInvestigacionCard icon='bx bxs-leaf'>
          <li>- Química </li>
          <li>- Ambiental</li>
          <li>- Polímeros</li>
          <li>- Catálisis</li>
        </LineaInvestigacionCard>
        <LineaInvestigacionCard icon='bx bx-bong'>
          <li>- Ingeniería Química</li>
          <li>- Bioquímica</li>
          <li>- Biotecnológica</li>
          <li>- Ciencias de los Alimentos</li>
          <li>- Ciencias del Mar</li>
          <li>- Ciencias Agropecuarias</li>
        </LineaInvestigacionCard>
        <LineaInvestigacionCard icon='bx bx-line-chart'>
          <li>- Administración</li>
          <li>- Planificación</li>
          <li>- Desarrollo Regional</li>
          <li>- Ingeniería Administrativa</li>
          <li>- Ingeniería Industrial</li>
          <li>- Ingeniería en Gestión Empresarial</li>
        </LineaInvestigacionCard>
        <LineaInvestigacionCard icon='bx bx-laptop'>
          <li>- Ciencias de la Computación</li>
          <li>- Inteligencia Artificial</li>
          <li>- Desarrollo de Software</li>
          <li>- Redes</li>
          <li>- Seguridad Informática</li>
        </LineaInvestigacionCard>
        <LineaInvestigacionCard icon='bx bx-hard-hat'>
          <li>- Ingeniería Eléctrica</li>
          <li>- Electrónica</li>
          <li>- Biomédica</li>
        </LineaInvestigacionCard>
      </CardsContainer>
    </SectionComponent>
  )
}

export default LineasInvestigacion
