import React, { Fragment } from "react";
import { showIcon } from "../../utils/helpers";
import { downloadCurrentFile } from "../../utils/api";
import { Disclosure, Transition } from "@headlessui/react";
import {
  Documento,
  SeccionNormateca,
} from "../../ts/interfaces/normateca.interfaces";
interface NormatecaDropdownProps {
  seccion: SeccionNormateca;
}

function NormatecaDropdown({ seccion }: NormatecaDropdownProps) {
  const currentSeccion = seccion.attributes;
  const { documento } = seccion.attributes;

  return (
    <Disclosure key="asd" as="div" className="mb-4">
      {({ open }) => (
        <Fragment>
          <Disclosure.Button
            className="flex justify-between items-center w-full px-4 py-3 text-base font-semibold text-white text-left bg-darkBlue
          border-2 rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-opacity-75 hover:text-pageBg"
          >
            <span>{currentSeccion.nombreSeccion}</span>
            <i
              className={`bx bx-chevron-down ${
                open ? "transform rotate-180" : ""
              }  text-3xl text-white`}
            ></i>
          </Disclosure.Button>
          <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            {documento.map(({ id, nombreDocumento, documento }: Documento) => {
              const fileExt = documento.data.attributes.ext;

              return (
                <Disclosure.Panel
                  key={id}
                  className="px-4 py-4 mt-3 mx-4 font-semibold rounded-md text-black
            border-2 border-darkBlue flex items-center hover:cursor-pointer hover:bg-gray-100"
                  onClick={() => downloadCurrentFile(documento)}
                >
                  {showIcon(fileExt)}
                  {nombreDocumento}
                </Disclosure.Panel>
              );
            })}
          </Transition>
        </Fragment>
      )}
    </Disclosure>
  );
}

export default NormatecaDropdown;
