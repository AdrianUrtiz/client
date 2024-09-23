import React from "react";
import { redesSocialesLinks, redesSocLinks } from "../../utils/footerLinks";
import SectionTitle from "../HomePage/SectionTitle";
import SectionComponent from "../SectionComponent";

function ContactoComponent() {
  return (
    <SectionComponent>
      <SectionTitle title='Contáctanos' />
      <div className='min-w-fit mb-8 px-5'>
        <h3 className='font-semibold text-xl md:text-3xl text-darkBlue'>
          Información de contacto
        </h3>
        <ul className='mt-6'>
          <li className='mt-3 flex flex-col md:flex-row'>
            <p className='font-bold text-sm md:text-base text-darkBlue basis-auto md:basis-32'>
              Dirección:
            </p>
            <p className='mt-2 md:mt-auto font-medium text-sm md:text-base text-darkBlue/80 basis-[calc(100%-8rem)]'>
              Av. Tecnologico No. 1500, Col. Lomas de Santiaguito, C.P. 58120,
              Morelia, Michoacán, México
            </p>
          </li>
          <li className='mt-3 flex flex-col md:flex-row'>
            <p className='font-bold text-sm md:text-base text-darkBlue basis-auto md:basis-32'>
              Teléfono:
            </p>
            <p className='mt-2 md:mt-auto font-medium text-sm md:text-base text-darkBlue/80 basis-[calc(100%-8rem)]'>
              443 312 1570 EXT. 316
            </p>
          </li>
          <li className='mt-3 flex flex-col md:flex-row'>
            <p className='font-bold text-sm md:text-base text-darkBlue basis-auto md:basis-32'>
              Correo:
            </p>
            <p className='mt-2 md:mt-auto font-medium text-sm md:text-base text-darkBlue/80 basis-[calc(100%-8rem)]'>
              <a
                href='mailto:depi@morelia.tecnm.mx'
                className='hover:text-darkBlue/95 hover:underline'>
                depi@morelia.tecnm.mx
              </a>
            </p>
          </li>
          <li className='mt-3 flex flex-col md:flex-row'>
            <p className='font-bold text-sm md:text-base text-darkBlue basis-auto md:basis-32'>
              Responsable:
            </p>
            <p className='mt-2 md:mt-auto font-medium text-sm md:text-base text-darkBlue/80 basis-[calc(100%-8rem)]'>
              Héctor Javier Vergara Hernández
            </p>
          </li>
          <li className='mt-3 flex flex-col md:flex-row'>
            <p className='font-bold text-sm md:text-base text-darkBlue basis-auto md:basis-32'>
              Redes:
            </p>
            <span className='mt-2 md:mt-auto basis-[calc(100%-8rem)] flex space-x-3'>
              {redesSocLinks.map(({ icon, href }, idx) => (
                <a
                  href={href}
                  key={idx}
                  className='font-bold bg-slate-50 h-6 w-6 rounded-sm text-center align-middle text-base md:text-lg text-darkBlue/80 hover:text-darkBlue'>
                  <i className={icon}></i>
                </a>
              ))}
            </span>
          </li>
        </ul>
      </div>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15064.486289314692!2d-101.1908608!3d19.726336!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842d0e40be8f4d3b%3A0xf001c256ae856856!2sInstituto%20Tecnol%C3%B3gico%20de%20Morelia!5e0!3m2!1ses!2smx!4v1652671775307!5m2!1ses!2smx'
        className='border-0 w-full h-[30rem] px-5'
        allowFullScreen={true}
        loading='lazy'
        referrerPolicy='no-referrer-when-downgrade'
      />
    </SectionComponent>
  )
}

export default ContactoComponent;
