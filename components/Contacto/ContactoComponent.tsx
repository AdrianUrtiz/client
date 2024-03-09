import React from "react";
import { redesSocialesLinks } from "../../utils/footerLinks";
import SectionTitle from "../HomePage/SectionTitle";
import SectionComponent from "../SectionComponent";

function ContactoComponent() {
  return (
    <SectionComponent>
      <SectionTitle title="Contáctanos" />
      <div className="min-w-fit mb-8 px-5">
        <h3 className="font-semibold text-xl md:text-3xl text-darkBlue">
          Información de contacto
        </h3>
        <ul className="mt-6">
          <li className="mt-3 flex flex-col md:flex-row">
            <p className="font-bold text-sm md:text-base text-darkBlue basis-auto md:basis-32">
              Dirección:
            </p>
            <p className="mt-2 md:mt-auto font-medium text-sm md:text-base text-darkBlue/80 basis-[calc(100%-8rem)]">
              Av. Universidad 1200, Col. Xoco, Ciudad de México, Alcaldía Benito
              Juárez C.P. 03330
            </p>
          </li>
          <li className="mt-3 flex flex-col md:flex-row">
            <p className="font-bold text-sm md:text-base text-darkBlue basis-auto md:basis-32">
              Teléfono:
            </p>
            <p className="mt-2 md:mt-auto font-medium text-sm md:text-base text-darkBlue/80 basis-[calc(100%-8rem)]">
              55 3600 2500
            </p>
          </li>
          <li className="mt-3 flex flex-col md:flex-row">
            <p className="font-bold text-sm md:text-base text-darkBlue basis-auto md:basis-32">
              Correo:
            </p>
            <p className="mt-2 md:mt-auto font-medium text-sm md:text-base text-darkBlue/80 basis-[calc(100%-8rem)]">
              dpii@tecnm.mx
            </p>
          </li>
          <li className="mt-3 flex flex-col md:flex-row">
            <p className="font-bold text-sm md:text-base text-darkBlue basis-auto md:basis-32">
              Redes sociales:
            </p>
            <span className="mt-2 md:mt-auto basis-[calc(100%-8rem)] flex space-x-3">
              {redesSocialesLinks.map(({ icon, href }, idx) => (
                <a
                  href={href}
                  key={idx}
                  className="font-bold bg-slate-50 h-6 w-6 rounded-sm text-center align-middle text-base md:text-lg text-darkBlue/80 hover:text-darkBlue"
                >
                  <i className={icon}></i>
                </a>
              ))}
            </span>
          </li>
        </ul>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1881.2634253051094!2d-99.12926571533876!3d19.43283898582782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff758ac697bf%3A0x6a92c70db2edc680!2sTecnol%C3%B3gico%20Nacional%20de%20M%C3%A9xico!5e0!3m2!1ses!2smx!4v1652671775307!5m2!1ses!2smx"
        className="border-0 w-full h-[30rem] px-5"
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </SectionComponent>
  );
}

export default ContactoComponent;
