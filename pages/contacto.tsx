import { Fragment } from "react";
import { NextPage } from "next";
import HeadPage from "../components/HeadPage";
import ContactoComponent from "../components/Contacto/ContactoComponent";

const ContactoPage: NextPage = () => {
  return (
    <Fragment>
      <HeadPage headTitle="TecNM - DPII - Contacto" />

      <ContactoComponent />
    </Fragment>
  );
};

export default ContactoPage;
