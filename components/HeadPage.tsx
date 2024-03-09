import React from "react";
import Head from "next/head";
import { MEDIA } from "../utils/media";

function HeadPage({ headTitle }: { headTitle: string }) {
  return (
    <Head>
      <title>{headTitle}</title>
      <meta
        name="description"
        content="TecNM - Tecnológico Nacional de México"
      />
      <link rel="icon" href={MEDIA.TECNM_ICO} />
    </Head>
  );
}

export default HeadPage;
