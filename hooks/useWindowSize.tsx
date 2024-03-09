import { useEffect, useState } from "react";

interface WindowsSizeProps {
  width: number | undefined;
}

function useWindowSize() {
  const [windowSize, setWindowSize] = useState<WindowsSizeProps>({
    width: undefined,
  });

  function handleResize() {
    setWindowSize({
      width: window.innerWidth,
    });
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);

      handleResize();

      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return windowSize;
}

export default useWindowSize;
