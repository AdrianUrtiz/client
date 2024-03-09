import Script from "next/script";
import React, { Fragment } from "react";
import { MEDIA } from "../utils/media";

function Chatbot() {
  return (
    <Fragment>
      <Script src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1" />
      <df-messenger
        intent="WELCOME"
        chat-title="Asistente Inteligente de la DPII"
        agent-id="f3867388-4092-44ee-a0d6-650a80b278ff"
        language-code="es"
        chat-icon={MEDIA.DPII_CHATBOT}
      ></df-messenger>
    </Fragment>
  );
}

export default Chatbot;
