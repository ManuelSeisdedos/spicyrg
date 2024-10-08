import set07 from '../assets/img/sets/set07.webp'
import set08 from '../assets/img/sets/set08.webp'
import set09 from '../assets/img/sets/set09.webp'
import { v4 as uuidv4 } from 'uuid'

const sets = [
  {
    uuid: uuidv4(),
    songBackgroundImg: set09,
    songUrl: 'https://soundcloud.com/araceliriogonzalez/set-psy-09/',
    songImgUrl: 'https://i1.sndcdn.com/artworks-a0mMfYBvnRdJ6XZc-Tev3Lw-t500x500.jpg',
    songImgAlt: 'Imagen del SET SPY 09',
    songName: 'SET SPY 09',
    artistName: 'Spicy'
  },
  {
    uuid: uuidv4(),
    songBackgroundImg: set08,
    songUrl: 'https://soundcloud.com/araceliriogonzalez/set-psy-08/',
    songImgUrl: 'https://i1.sndcdn.com/artworks-jKaErXD4kzY84Z7c-NalsYg-t500x500.jpg',
    songImgAlt: 'Imagen del SET SPY 08',
    songName: 'SET SPY 08',
    artistName: 'Spicy'
  },
  {
    uuid: uuidv4(),
    songBackgroundImg: set07,
    songUrl: 'https://soundcloud.com/araceliriogonzalez/set-psy-07/',
    songImgUrl: 'https://i1.sndcdn.com/artworks-yYoAB5yKeloYxy03-WqXi4g-t500x500.jpg',
    songImgAlt: 'Imagen del SET SPY 07',
    songName: 'SET SPY 07',
    artistName: 'Spicy'
  }
]

export { sets }
