import React from 'react'
import { ChildrenJSXasProps } from '../../../ts/interfaces'

interface LineaInvestigacionCardProps {
  children: ChildrenJSXasProps
  icon: string
}

function LineaInvestigacionCard({
  children,
  icon,
}: LineaInvestigacionCardProps) {
  return (
    <div className='sm:max-h-[24rem] w-80 sm:w-72 flex flex-col gap-y-3 border rounded-md bg-white text-darkBlue px-6 py-6 hover:scale-[1.02] cursor-pointer transition-transform duration-300 ease-in-out'>
      <i className={`${icon} text-4xl md:text-6xl self-center`}></i>
      <hr className='border-darkBlue w-1/2 self-center' />
      <ul className='font-semibold justify-self-center'>{children}</ul>
    </div>
  )
}

export default LineaInvestigacionCard
