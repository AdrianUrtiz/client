import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { MenuDropDownProps } from "../../ts/interfaces/menuDropDown.interface";

function MenuDropDown({ showMenu, links }: MenuDropDownProps) {
  return (
    <Menu as="div" className="text-left absolute top-7 z-10">
      <Transition
        as={Fragment}
        show={showMenu}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          className={`mt-2 w-max max-w-[calc(100vw/6)] bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
        >
          <div className="px-1 py-1 flex flex-col flex-wrap">
            {links.map(({ text, href }) => (
              <Menu.Item key={text}>
                {({ active }) => (
                  <a
                    href={href}
                    className={`${
                      active ? "bg-darkBlue text-white" : "text-gray-900"
                    } group rounded-md  px-1.5 py-1.5 text-sm`}
                  >
                    {text}
                  </a>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default MenuDropDown;
