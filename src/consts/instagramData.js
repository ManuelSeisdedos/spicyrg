import instagramMIcon from '../assets/img/icons/instagram-m-icon.svg'

import { v4 as uuidv4 } from 'uuid'

const instagramData =
  {
    uuid: uuidv4(),
    linkTo: 'https://www.instagram.com/spicy.rg',
    text: 'spicy.rg',
    img: instagramMIcon,
    imgAlt: 'Icono de Instagram',
    isBlankInitialization: true,
    modifire: 'contact'
  }

export { instagramData }
