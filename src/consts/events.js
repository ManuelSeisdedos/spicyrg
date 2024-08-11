import { v4 as uuidv4 } from 'uuid'

const events = [
  {
    uuid: uuidv4(),
    date: 'AGO 26/24',
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
  },
  {
    uuid: uuidv4(),
    date: 'JUN 15/24',
    hour: '00:00hs',
    location: {
      adress: {
        place: 'Casa Harem Del Fortin',
        street: {
          name: 'Calle 68',
          number: 'e/9 y 10'
        }
      },
      city: 'La Plata',
      province: 'Buenos Aires',
      googleMapsLink: 'https://www.google.com.ar/maps/place/Casa+Harem/@-34.9317471,-57.9334981,15z/data=!4m14!1m7!3m6!1s0x95a2e97f91769d3b:0x4688061df0599fdc!2sCasa+Harem!8m2!3d-34.9298923!4d-57.935094!16s%2Fg%2F11hds1cysz!3m5!1s0x95a2e97f91769d3b:0x4688061df0599fdc!8m2!3d-34.9298923!4d-57.935094!16s%2Fg%2F11hds1cysz?entry=ttu',
      googleMapsIframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13083.96648927495!2d-57.93349806529876!3d-34.93174706423865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2e97f91769d3b%3A0x4688061df0599fdc!2sCasa%20Harem!5e0!3m2!1ses!2sar!4v1722454156543!5m2!1ses!2sar'
    },
    ticketUrl: 'https://www.instagram.com/p/C7MT3SfAP1e/'
  },
  {
    uuid: uuidv4(),
    date: 'MAY 20/24',
    hour: '21:00hs',
    location: {
      adress: {
        place: 'Casa Popular Chicha Mariani',
        street: {
          name: 'Calle 61',
          number: 'n996'
        }
      },
      city: 'La Plata',
      province: 'Buenos Aires',
      googleMapsLink: 'https://www.google.com.ar/maps/place/Casa+popular+Chicha+Mariani/@-34.9292625,-57.9532812,17z/data=!3m1!4b1!4m6!3m5!1s0x95a2e9542fb7f4bf:0xc207d67ddefdc121!8m2!3d-34.929267!4d-57.9484103!16s%2Fg%2F11p15_tvb3?entry=ttu',
      googleMapsIframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3271.090686789758!2d-57.95328121670089!3d-34.92926250471535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2e9542fb7f4bf%3A0xc207d67ddefdc121!2sCasa%20popular%20Chicha%20Mariani!5e0!3m2!1ses!2sar!4v1722454960324!5m2!1ses!2sar'
    },
    ticketUrl: 'https://www.instagram.com/p/CrzOgKDMevuLl3Z_gRxP7L_1kBdQBCvA3Fsz-g0/'
  }
]

export { events }
