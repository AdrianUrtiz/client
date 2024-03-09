import { useEffect, useState } from "react";
import useWindowSize from "./useWindowSize";

function useShowNavigation() {
  const { width } = useWindowSize();
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  useEffect(() => {
    if (typeof width !== "undefined") {
      if (width > 768 && menuIsOpen) {
        setMenuIsOpen(false);
      }
    }
  }, [width, menuIsOpen]);

  const menuToggleHandler = () => {
    setMenuIsOpen((prevMenu) => !prevMenu);
  };

  return { width, menuIsOpen, menuToggleHandler };
}

export default useShowNavigation;
