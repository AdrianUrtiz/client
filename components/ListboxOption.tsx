import React, { Fragment } from "react";
import { Listbox } from "@headlessui/react";
import { OfertaAcedemicaAttributes, PlantelAttributes } from "../ts/interfaces";

interface ListBoxOptionProps {
  value: OfertaAcedemicaAttributes | PlantelAttributes | string;
  listboxText: string;
}

function ListboxOption({ value, listboxText }: ListBoxOptionProps) {
  return (
    <Listbox.Option
      className={({ active }) =>
        `cursor-default select-none relative z-50 py-2 pl-10 pr-4 ${
          active ? "text-darkBlue bg-slate-200" : "text-gray-900"
        }`
      }
      value={value}
    >
      {({ selected }) => (
        <Fragment>
          <span
            className={`block truncate ${
              selected ? "font-medium" : "font-normal"
            }`}
          >
            {listboxText}
          </span>
          {selected ? (
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-darkBlue">
              <i className="bx bx-check text-xl"></i>
            </span>
          ) : null}
        </Fragment>
      )}
    </Listbox.Option>
  );
}

export default ListboxOption;
