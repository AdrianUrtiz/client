import React from "react";
import { ChildrenJSXasProps } from "../../../ts/interfaces";

interface LineaInvestigacionCardProps {
  children: ChildrenJSXasProps;
  icon: string;
}

function LineaInvestigacionCard({
  children,
  icon,
}: LineaInvestigacionCardProps) {
  return (
    <div className="sm:max-h-[22rem] w-80 sm:w-60 flex flex-col gap-y-5 border rounded-md bg-white text-darkBlue px-8 mx-5 py-6">
      <i className={`${icon} text-7xl mt-2 self-center`}></i>
      <ul className="font-semibold justify-self-center">{children}</ul>
    </div>
  );
}

export default LineaInvestigacionCard;
