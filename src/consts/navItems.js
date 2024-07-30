import { v4 as uuidv4 } from 'uuid'

const navItems = [
  {
    uuid: uuidv4(),
    linkTo: '#',
    text: 'Spicy',
    img: 'src/assets/img/icons/side-bar-icon.svg',
    imgAlt: 'Ají rojo',
    isBlankInitialization: false,
    modifire: 'aji'
  },
  {
    uuid: uuidv4(),
    linkTo: '#sets',
    text: 'Sets',
    isBlankInitialization: false,
    modifire: 'navLink'
  },
  {
    uuid: uuidv4(),
    linkTo: '#events',
    text: 'Eventos',
    isBlankInitialization: false,
    modifire: 'navLink'
  },
  {
    uuid: uuidv4(),
    linkTo: '#gallery',
    text: 'Galeria',
    isBlankInitialization: false,
    modifire: 'navLink'
  },
  {
    uuid: uuidv4(),
    linkTo: '#contact',
    text: 'Contacto',
    isBlankInitialization: false,
    modifire: 'navLink'
  }
]

export { navItems }
