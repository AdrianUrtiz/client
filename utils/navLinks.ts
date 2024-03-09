const navTopLinks = [
  { text: 'Inicio', href: '/' },
  { text: 'Oferta Académica', href: '/planEstudios' },
  { text: 'Contacto', href: '/contacto' },
  {
    text: 'Normateca',
    href: '#',
    subLinks: [
      {
        text: 'Normateca Actualizada',
        href: '/normateca/normatecaActualizada',
      },
      { text: 'Normateca Histórica', href: '/normateca/normatecaHistorica' },
    ],
  },
  {
    text: 'Convocatorias',
    href: '/convocatorias',
    subLinks: [
      { text: 'Todas las Convocatorias', href: '/convocatorias' },
      { text: 'Convocatorias CONACYT ', href: '/convocatorias/conacyt' },
      { text: 'Convocatorias TecNM', href: '/convocatorias/tecnm' },
      { text: 'Convocatorias Externas', href: '/convocatorias/externas' },
    ],
  },
]

export { navTopLinks }
