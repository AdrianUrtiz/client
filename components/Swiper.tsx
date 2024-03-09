import React from "react";
import { Swiper as SwiperJSX } from "swiper/react";
import { ChildrenJSXProps } from "../ts/interfaces";
import { Autoplay, Navigation, Pagination } from "swiper";

function Swiper({ children }: ChildrenJSXProps) {
  return (
    <SwiperJSX
      slidesPerView={1}
      spaceBetween={30}
      autoplay={{
        delay: 6000,
        disableOnInteraction: false,
      }}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation, Autoplay]}
      className="w-full relative avisos-slider"
    >
      {children}
    </SwiperJSX>
  );
}

export default Swiper;
