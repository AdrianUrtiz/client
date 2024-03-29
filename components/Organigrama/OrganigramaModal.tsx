import React, { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";

function OrganigramaModal({
  isOpen,
  toggleModal,
  nombre,
  cargo,
  biografia,
  name,
  imagePath,
}: {
  isOpen: boolean;
  toggleModal: VoidFunction;
  nombre: string;
  cargo: string;
  biografia: string;
  name: string;
  imagePath: string;
}) {
  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-[100] inset-0 overflow-y-auto"
        initialFocus={cancelButtonRef}
        onClose={toggleModal}
      >
        <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="relative inline-block align-bottom bg-white rounded-sm text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg md:max-w-2xl sm:w-full">
              <div className="w-full px-4 mt-4 flex justify-end">
                <i
                  className="bx bx-x text-3xl opacity-75 hover:opacity-100 cursor-pointer"
                  onClick={toggleModal}
                ></i>
              </div>
              <div className="bg-white px-4 pb-4">
                <div>
                  <img
                    src={imagePath}
                    alt={name}
                    className="relative inline-block float-left mr-3 w-44 h-32 rounded-md sm:max-h-60 sm:w-52"
                  />
                  <div className="mt-3 text-center sm:mt-0 sm:text-left">
                    <Dialog.Title
                      as="h3"
                      className="text-lg leading-6 font-medium text-gray-900"
                    >
                      {nombre}
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm font-semibold text-blue-900 my-4">
                        {cargo}
                      </p>
                      <p className="text-sm text-gray-500 text-justify my-2">
                        {biografia}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

export default OrganigramaModal;
