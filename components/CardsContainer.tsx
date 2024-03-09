import React from "react";

function CardsContainer({
  children,
  styles,
}: {
  children: React.ReactNode;
  styles?: string;
}) {
  return (
    <div
      className={`w-full space-y-8 sm:space-y-0 flex flex-wrap justify-center gap-10 ${styles}`}
    >
      {children}
    </div>
  );
}

export default CardsContainer;
