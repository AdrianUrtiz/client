import React from 'react'
import { Swiper as SwiperJSX } from 'swiper/react'
import { ChildrenJSXProps } from '../ts/interfaces'
import { Autoplay, Navigation, Pagination } from 'swiper'
import styled from 'styled-components'

const StyledSwiper = styled(SwiperJSX)`
  & .swiper-button-next,
  & .swiper-button-prev {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 100%;
    width: 4rem;
    height: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    color: white;
  }
`

function Swiper({ children }: ChildrenJSXProps) {
  return (
    <StyledSwiper
      slidesPerView={1}
      spaceBetween={30}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation, Autoplay]}
      className='w-full relative avisos-slider'>
      {children}
    </StyledSwiper>
  )
}

export default Swiper
