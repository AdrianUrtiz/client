import React from "react";
import SectionTitle from "./SectionTitle";
import { FAQ } from "../../ts/interfaces";
import SectionComponent from "../SectionComponent";
import { Disclosure, Transition } from "@headlessui/react";

function Faqs({ preguntasFrecuentes }: { preguntasFrecuentes: FAQ[] }) {
  return (
    <SectionComponent
      sectionProps="bg-pageBg"
      containerProps="transition-all ease-in-out duration-500 -mb-8"
    >
      <SectionTitle title="Preguntas Frecuentes" />
      {preguntasFrecuentes?.map(({ id, attributes }) => {
        return (
          <Disclosure key={id} as="div" className="mb-8">
            {({ open }) => (
              <>
                <Disclosure.Button
                  className="flex justify-between items-center w-full p-4 text-base font-semibold text-black text-left bg-white   
                border-gray-400 border-2 shadow-sm rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-opacity-75 hover:text-darkBlue"
                >
                  <span>{attributes.pregunta}</span>
                  <i
                    className={`bx bx-chevron-down ${
                      open ? "transform rotate-180" : ""
                    }  text-3xl text-darkBlue`}
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
                  <Disclosure.Panel
                    className="px-4 py-5 mt-3 mx-4 font-semibold rounded-md text-gray-50  
                   bg-[#234986]"
                  >
                    {attributes.respuesta}
                  </Disclosure.Panel>
                </Transition>
              </>
            )}
          </Disclosure>
        );
      })}
    </SectionComponent>
  );
}

export default Faqs;
