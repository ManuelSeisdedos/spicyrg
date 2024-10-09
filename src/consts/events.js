import { v4 as uuidv4 } from 'uuid'

const events = [
  {
    uuid: uuidv4(),
    date: 'OCT 12/24',
    hour: '23:00hs',
    location: {
      adress: {
        place: 'Fungus Beer',
        street: {
          name: 'Calle 73',
          number: 'n1279'
        }
      },
      city: 'La Plata',
      province: 'Buenos Aires',
      googleMapsLink: 'https://www.google.com.ar/maps/place/Fungus/@-34.9149735,-57.9889486,14z/data=!4m10!1m2!2m1!1sFungus+Beer+La+Plata!3m6!1s0x95a2e7f479bccf77:0x14818d3ab4a9e53d!8m2!3d-34.9207452!4d-57.9433664!15sChRGdW5ndXMgQmVlciBMYSBQbGF0YVoWIhRmdW5ndXMgYmVlciBsYSBwbGF0YZIBA2JhcuABAA!16s%2Fg%2F11stgfzhd6?entry=ttu',
      googleMapsIframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26173.282394426406!2d-57.98894856756369!3d-34.91497349798219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2e7f479bccf77%3A0x14818d3ab4a9e53d!2sFungus!5e0!3m2!1ses!2sar!4v1722454725362!5m2!1ses!2sar'
    },
    ticketUrl: 'https://www.instagram.com/fungus.beer/'
  },
  {
    uuid: uuidv4(),
    date: 'SEP 06/24',
    hour: '23:00hs',
    location: {
      adress: {
        place: 'Fungus Beer',
        street: {
          name: 'Calle 73',
          number: 'n1279'
        }
      },
      city: 'La Plata',
      province: 'Buenos Aires',
      googleMapsLink: 'https://www.google.com.ar/maps/place/Fungus/@-34.9149735,-57.9889486,14z/data=!4m10!1m2!2m1!1sFungus+Beer+La+Plata!3m6!1s0x95a2e7f479bccf77:0x14818d3ab4a9e53d!8m2!3d-34.9207452!4d-57.9433664!15sChRGdW5ndXMgQmVlciBMYSBQbGF0YVoWIhRmdW5ndXMgYmVlciBsYSBwbGF0YZIBA2JhcuABAA!16s%2Fg%2F11stgfzhd6?entry=ttu',
      googleMapsIframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26173.282394426406!2d-57.98894856756369!3d-34.91497349798219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2e7f479bccf77%3A0x14818d3ab4a9e53d!2sFungus!5e0!3m2!1ses!2sar!4v1722454725362!5m2!1ses!2sar'
    },
    ticketUrl: 'https://www.instagram.com/fungus.beer/'
  },
  {
    uuid: uuidv4(),
    date: 'AGO 17/24',
    hour: '23:59hs',
    location: {
      adress: {
        place: 'Fungus Beer',
        street: {
          name: 'Calle 73',
          number: 'n1279'
        }
      },
      city: 'La Plata',
      province: 'Buenos Aires',
      googleMapsLink: 'https://www.google.com.ar/maps/place/Fungus/@-34.9149735,-57.9889486,14z/data=!4m10!1m2!2m1!1sFungus+Beer+La+Plata!3m6!1s0x95a2e7f479bccf77:0x14818d3ab4a9e53d!8m2!3d-34.9207452!4d-57.9433664!15sChRGdW5ndXMgQmVlciBMYSBQbGF0YVoWIhRmdW5ndXMgYmVlciBsYSBwbGF0YZIBA2JhcuABAA!16s%2Fg%2F11stgfzhd6?entry=ttu',
      googleMapsIframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26173.282394426406!2d-57.98894856756369!3d-34.91497349798219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2e7f479bccf77%3A0x14818d3ab4a9e53d!2sFungus!5e0!3m2!1ses!2sar!4v1722454725362!5m2!1ses!2sar'
    },
    ticketUrl: 'https://www.instagram.com/fungus.beer/'
  }
]

export { events }
