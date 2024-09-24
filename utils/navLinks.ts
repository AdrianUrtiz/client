const navTopLinks = [
  { text: "Inicio", href: "/" },
  {
    text: "Oferta Nacional",
    href: "/planEstudios",
  },
  {
    text: "Oferta Morelia",
    href: "https://www.morelia.tecnm.mx/#/oferta-educativa/posgrados",
    target: "_blank",
    rel: "noreferrer noopener",
  },
  { text: "Contacto", href: "/contacto" },

  {
    text: "Convocatorias",
    href: "/convocatorias",
    subLinks: [
      { text: "Todas las Convocatorias", href: "/convocatorias" },
      { text: "Todos los Coordinadores", href: "/coordinadores/coordinadores" },
    ],
  },
];

export { navTopLinks };
