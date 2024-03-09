import React from "react";

interface SectionTitleProps {
  title: string;
  properties?: string;
  color?: string;
}

function SectionTitle({
  title,
  properties,
  color = "text-darkBlue",
}: SectionTitleProps) {
  return (
    <h2
      className={`mb-8 md:mb-10 uppercase text-center font-bold text-3xl md:text-4xl ${properties} ${color}`}
    >
      {title}
    </h2>
  );
}

export default SectionTitle;
