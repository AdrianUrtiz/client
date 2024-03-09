import React from "react";
import MenuDropDown from "./MenuDropDown";
import useToggle from "../../hooks/useToggle";
import { navDownLinks } from "../../utils/navLinks";

function NavDown() {
  const [normatecaMenu, setNormatecaMenu] = useToggle();
  const [convocatoriasMenu, setConvocatoriasMenu] = useToggle();
  const linksNormateca: any = navDownLinks.filter(
    (link) => link.text == "Normateca"
  )[0].subLinks;
  const linksConvocatorias: any = navDownLinks.filter(
    (link) => link.text == "Convocatorias"
  )[0].subLinks;

  return (
    <div className="hidden md:block bg-white border-b-2">
      <div className="container mx-auto py-8 px-2">
        <ul className="flex justify-around md:justify-evenly">
          <li className="relative" onClick={setNormatecaMenu}>
            <a className="pb-2 px-4 rounded-lg link link-underline link-underline-blue md:px-2 font-semibold cursor-pointer">
              Normateca
            </a>
            <MenuDropDown
              showMenu={normatecaMenu}
              links={linksNormateca}
            ></MenuDropDown>
          </li>
          {navDownLinks.map(
            (link) =>
              !link.subLinks && (
                <li key={link.text} className="relative">
                  <a
                    href={link.href}
                    className="pb-2 px-4 rounded-lg link link-underline link-underline-blue md:px-2 font-semibold"
                  >
                    {link.text}
                  </a>
                </li>
              )
          )}
          <li className="relative" onClick={setConvocatoriasMenu}>
            <a className="pb-2 px-4 rounded-lg link link-underline link-underline-blue md:px-2 font-semibold cursor-pointer">
              Convocatorias
            </a>
            <MenuDropDown
              showMenu={convocatoriasMenu}
              links={linksConvocatorias}
            ></MenuDropDown>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavDown;
