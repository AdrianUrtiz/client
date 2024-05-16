import React from 'react'

function CardsContainer({
  children,
  styles,
}: {
  children: React.ReactNode
  styles?: string
}) {
  return (
    <div
      className={`${styles} w-full space-y-8 sm:space-y-0 flex flex-wrap lg:flex-nowrap justify-center gap-10`}>
      {children}
    </div>
  )
}

export default CardsContainer
