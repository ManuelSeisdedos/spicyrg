const navItems = [
  {
    uuid: crypto.randomUUID(),
    linkTo: '#',
    text: 'Spicy',
    img: 'src/assets/img/icons/SideBar.svg',
    imgAlt: 'Ají rojo',
    isBlankInitialization: false,
    modifire: 'aji'
  },
  {
    uuid: crypto.randomUUID(),
    linkTo: '#sets',
    text: 'Sets',
    isBlankInitialization: false,
    modifire: 'navLink'
  },
  {
    uuid: crypto.randomUUID(),
    linkTo: '#events',
    text: 'Eventos',
    isBlankInitialization: false,
    modifire: 'navLink'
  },
  {
    uuid: crypto.randomUUID(),
    linkTo: '#gallery',
    text: 'Galeria',
    isBlankInitialization: false,
    modifire: 'navLink'
  },
  {
    uuid: crypto.randomUUID(),
    linkTo: '#contact',
    text: 'Contacto',
    isBlankInitialization: false,
    modifire: 'navLink'
  }
]

export { navItems }
