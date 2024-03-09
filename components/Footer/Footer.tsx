import React from "react";
import {
  redesSocialesLinks,
  conocenosLinks,
  serviciosLinks,
  contactanosLinks,
} from "../../utils/footerLinks";
import { MEDIA } from "../../utils/media";
import FooterSectionTitle from "./FooterSectionTitle";

function Footer() {
  return (
    <footer className="text-center lg:text-left bg-darkBlue text-white">
      <div className="container mx-auto">
        <div className="flex justify-center items-center lg:justify-between p-6 border-b border-gray-300">
          <div className="mr-12 hidden lg:block">
            <span>Obtén más información en nuestras redes sociales:</span>
          </div>
          <div className="flex justify-center items-center">
            {redesSocialesLinks.map(({ icon, href }, idx) => (
              <a
                href={href}
                key={idx}
                className="even:mx-5 text-lg text-gray-100 hover:text-sky-300"
              >
                <i className={icon}></i>
              </a>
            ))}
          </div>
        </div>
        <div className="mx-6 py-10 text-center md:text-left">
          <div className="grid grid-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h6 className="uppercase font-semibold mb-4 flex items-center justify-center md:justify-start">
                <img className="w-40 h-14" src={MEDIA.TECNM_LOGO} alt="tecnm" />
              </h6>
              <p>
                Formar integralmente profesionales competitivos de la ciencia,
                la tecnología y otras áreas de conocimiento, comprometidos con
                el desarrollo económico, social, cultural y con la
                sustentabilidad del país.
              </p>
            </div>
            <div>
              <FooterSectionTitle text="Conócenos" />
              {conocenosLinks.map(({ text, href }, idx) => (
                <p className="mb-4" key={idx}>
                  <a href={href} className="text-gray-300">
                    {text}
                  </a>
                </p>
              ))}
            </div>
            <div>
              <FooterSectionTitle text="Servicios" />
              {serviciosLinks.map(({ text, href }, idx) => (
                <p className="mb-4" key={idx}>
                  <a href={href} className="text-gray-300">
                    {text}
                  </a>
                </p>
              ))}
            </div>
            <div>
              <FooterSectionTitle text="Contáctanos" />
              {contactanosLinks.map(({ text, icon }, idx) => (
                <p
                  className="flex items-center justify-center md:justify-start mb-4"
                  key={idx}
                >
                  <i className={`${icon} mr-4`}></i>
                  {text}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="text-center p-6 bg-darkBlue ">
          <span>© 2022 Copyright: </span>
          <span className="font-semibold">Tecnológico Nacional de México</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
