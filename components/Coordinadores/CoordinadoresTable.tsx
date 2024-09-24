import React, { Fragment } from 'react'

interface Coordinador {
  Coordinador: string
  Correo: string
  Programa: string
  Modalidad: string
}

interface CoordinadoresTableProps {
  coordinadores?: Coordinador[] // Hacer que la propiedad sea opcional
}

function CoordinadoresTable({ coordinadores = [] }: CoordinadoresTableProps) {
  return (
    <Fragment>
      <table className='w-full table-fixed mt-8'>
        <thead className='text-white'>
          <tr className='w-full bg-darkBlue text-center'>
            <th className='py-5'>Coordinador</th>
            <th>Correo</th>
            <th>Programa</th>
            <th>Modalidad</th>
          </tr>
        </thead>
        <tbody>
          {coordinadores.length > 0 ? (
            coordinadores.map((coordinador, index) => (
              <tr
                key={index}
                className='min-h-full h-auto odd:bg-blue-700/10 even:bg-white border-y-2 text-center'>
                <td className='p-8'>{coordinador.Coordinador}</td>
                <td className='text-blue-600'><a href={`mailto:${coordinador.Correo}`}>{coordinador.Correo}</a></td>
                <td>{coordinador.Programa}</td>
                <td>{coordinador.Modalidad}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5} className='text-center py-5 bg-blue-700/10 text-darkBlue font-semibold'>
                No se encontraron resultados para esta búsqueda
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </Fragment>
  )
}

export default CoordinadoresTable