import React from "react";

function FooterSectionTitle({ text }: { text: string }) {
  return (
    <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
      {text}
    </h6>
  );
}

export default FooterSectionTitle;
