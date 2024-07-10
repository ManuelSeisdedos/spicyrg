import { faInstagram, faSoundcloud, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faCode, faDiagramProject, faPenRuler } from '@fortawesome/free-solid-svg-icons'

const footerLists = [
  {
    id: 1,
    title: 'Contact',
    items: [
      {
        id: 1,
        linkTo: 'https://www.instagram.com/spicy.rg',
        text: 'spicy.rg',
        icon: faInstagram,
        isBlankInitialization: true,
        modifier: 'footer'
      },
      {
        id: 2,
        linkTo: 'https://on.soundcloud.com/CXvnS',
        text: 'SoundCloud',
        icon: faSoundcloud,
        isBlankInitialization: true,
        modifier: 'footer'
      },
      {
        id: 3,
        linkTo: 'https://wa.me/+5492494563500',
        text: 'WhatsApp',
        icon: faWhatsapp,
        isBlankInitialization: true,
        modifier: 'footer'
      }
    ]
  },
  {
    id: 1,
    title: 'Dev',
    items: [
      {
        id: 1,
        linkTo: '',
        text: 'Project Manager',
        icon: faDiagramProject,
        isBlankInitialization: true,
        modifier: 'footer'
      },
      {
        id: 1,
        linkTo: '',
        text: 'UX UI',
        icon: faPenRuler,
        isBlankInitialization: true,
        modifier: 'footer'
      },
      {
        id: 2,
        linkTo: '',
        text: 'Frontend',
        icon: faCode,
        isBlankInitialization: true,
        modifier: 'footer'
      }
    ]
  }
]

export { footerLists }
