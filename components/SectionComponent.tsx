import React from "react";
import { ChildrenJSXasProps } from "../ts/interfaces";

interface SectionComponentProps {
  children: ChildrenJSXasProps;
  sectionProps?: string;
  containerProps?: string;
}

function SectionComponent({
  children,
  sectionProps,
  containerProps,
}: SectionComponentProps) {
  return (
    <section className={`py-12 px-5 ${sectionProps}`}>
      <div className={`container mx-auto ${containerProps}`}>{children}</div>
    </section>
  );
}

export default SectionComponent;
