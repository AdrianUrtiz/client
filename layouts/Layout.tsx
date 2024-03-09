import React, { Fragment } from "react";
import Chatbot from "../components/Chatbot";
import Footer from "../components/Footer/Footer";
import NavTop from "../components/Navbar/NavTop";
import { ChildrenJSXProps } from "../ts/interfaces";

function Layout({ children }: ChildrenJSXProps) {
  return (
    <Fragment>
      <NavTop />
      <main className="relative">{children}</main>
      <Chatbot />
      <Footer />
    </Fragment>
  );
}

export default Layout;
