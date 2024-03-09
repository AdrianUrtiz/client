import { Listbox, Transition } from "@headlessui/react";
import React, { Fragment, useEffect, useState } from "react";

interface PlanEstudiosSearchDropdownInterface {
  dispatch: React.Dispatch<any>;
  dropDownItems: any[];
  type: String;
  searchText: String;
  payloadKey: String;
  children: React.ReactNode;
}

function PlanEstudiosSearchDropdown({
  dispatch,
  dropDownItems,
  type,
  searchText,
  payloadKey,
  children,
}: PlanEstudiosSearchDropdownInterface) {
  const [selected, setSelected] = useState(dropDownItems[0]);

  useEffect(() => {
    dispatch({ type: type, payload: { [`${payloadKey}`]: selected } });
  }, [selected]);

  return (
    <div className="col-span-1">
      <span className="mb-3 inline-block text-darkBlue font-semibold">
        {searchText}
      </span>
      <div className="w-full">
        <Listbox value={selected} onChange={setSelected}>
          <div className="relative mt-1 border-2 border-darkBlue rounded-lg">
            <Listbox.Button
              className="relative w-full py-3 pl-3 pr-10 text-left
            bg-white rounded-lg shadow-md cursor-default focus:outline-none 
            focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white
            focus-visible:ring-offset-darkBlue focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm"
            >
              <span className="block">
                {selected.attributes?.nombrePlantel
                  ? selected.attributes?.nombrePlantel
                  : selected.attributes?.nombrePosgrado
                  ? selected.attributes?.nombrePosgrado
                  : selected}
              </span>
              <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <i className="bx bx-expand-vertical"></i>
              </span>
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options
                className="absolute z-20 w-full py-1 mt-1 overflow-auto 
              text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black 
              ring-opacity-5 focus:outline-none sm:text-sm"
              >
                {children}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
      </div>
    </div>
  );
}

export default PlanEstudiosSearchDropdown;
