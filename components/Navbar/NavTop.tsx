import React, { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import { MEDIA } from "../../utils/media";
import { navTopLinks } from "../../utils/navLinks";
import useShowNavigation from "../../hooks/useShowNavigation";

function NavTop() {
  const { width, menuIsOpen, menuToggleHandler } = useShowNavigation();

  return (
    <Fragment>
      <nav className="bg-darkBlue shadow sticky top-0 z-50 w-full">
        <div className="container mx-auto w-full">
          <div className="py-5 px-4 flex justify-between flex-wrap sm:flex-no-wrap md:flex-wrap items-center text-white">
            <div className="flex flex-row items-center gap-6">
              {" "}
              <Link href="/">
                <a className="hidden md:flex">
                  <Image
                    width={800}
                    height={80}
                    src={MEDIA.LOGOSNAVBAR}
                    alt={MEDIA.LOGOSNAVBAR}
                  />
                </a>
              </Link>
              <div
                className={`${
                  menuIsOpen && width && width < 768
                    ? "max-h-screen"
                    : "max-h-0"
                } w-full transition-[max-height] ease-in-out duration-500 md:transition-none md:w-auto md:flex md:items-center overflow-hidden md:overflow-visible`}
              >
                <ul className="flex flex-col duration-300 ease-out sm:transition-none gap-4 items-center  md:flex-row my-10 md:my-0">
                  {navTopLinks.map((link, i) => (
                    <li
                      key={i}
                      className="font-base font-medium group whitespace-nowrap relative"
                    >
                      <Link href={link.href}>
                        <a className="rounded-lg py-2 px-4 transition ease-in duration-300 hover:cursor-pointer hover:bg-opacity-40 hover:bg-sky-700">
                          {link.text}
                        </a>
                      </Link>
                      {link.subLinks && (
                        <ul className="hidden md:group-hover:flex flex-col md:absolute bg-darkBlue py-2 px-4 mt-1">
                          {link.subLinks.map((subLink, j) => (
                            <li
                              key={j}
                              className="hover:bg-opacity-40 hover:bg-sky-700 py-2 px-4 rounded-lg text-sm"
                            >
                              <Link href={subLink.href}>
                                <a>{subLink.text}</a>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
              <a>
                <div className="text-white text-xl">|</div>
              </a>
              <a>
                <span className="font-normal text-xl">DEPII</span>
              </a>
            </div>
            <div className="ml-auto md:hidden">
              {menuIsOpen && width && width < 768 ? (
                <i
                  className="bx bx-x text-5xl cursor-pointer hover:text-sky-400 transition-all duration-300 relative z-20"
                  onClick={menuToggleHandler}
                ></i>
              ) : (
                <i
                  className="bx bx-menu text-5xl cursor-pointer hover:text-sky-400 transition-all duration-300"
                  onClick={menuToggleHandler}
                ></i>
              )}
            </div>
          </div>
        </div>
      </nav>
    </Fragment>
  );
}

export default NavTop;
