import React from "react";
import Swiper from "../Swiper";
import { SwiperSlide } from "swiper/react";
import { Aviso } from "../../ts/interfaces";
import { getStrapiMedia } from "../../utils/api";

function Avisos({ avisos }: { avisos: Aviso[] }) {
  return (
    <section className="container mx-auto w-full max-w-8xl">
      <Swiper>
        {avisos?.map(({ id, attributes }) => {
          const { filePath, fileName } = getStrapiMedia(attributes.imagen);
          return (
            <SwiperSlide
              key={id}
              className="w-full min-h-[10rem] sm:min-h-[18rem] md:min-h-[22rem] lg:min-h-[30rem] xl:min-h-[35rem] max-h-[35rem] relative"
            >
              <a href={attributes.link} className="w-full h-full absolute">
                <img
                  src={`${filePath ? filePath : ""}`}
                  alt={`${fileName ? fileName : ""}`}
                  className="w-full h-full absolute object-fill"
                />
              </a>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default Avisos;
