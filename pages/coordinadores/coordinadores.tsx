import React from 'react'
import CoordinadoresTable from '../../components/Coordinadores/CoordinadoresTable'
import { coordinadores } from '../../data/ofertaAcademicaState'

const Coordinadores = () => {
  return (
    <CoordinadoresTable coordinadores={coordinadores} />        
)
}

export default Coordinadores;