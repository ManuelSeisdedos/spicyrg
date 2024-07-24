import './AudioPlayer.css'
import { useState } from 'react'
import ReactPlayer from 'react-player/soundcloud'
import Button from '../../core/Button/Button'

function AudioPlayer () {
  const [isPlayed, setIsPlayed] = useState(false)
  const [currentTime, setCurrentTime] = useState('0:00')
  const [duration, setDuration] = useState('0:00')

  const handlePlayed = () => {
    setIsPlayed(!isPlayed)
  }

  return (
    <>
      <div className='AudioPlayer'>
        <div className='AudioPlayer-soundImg'>
          <img className='AudioPlayer-img' src='https://i1.sndcdn.com/artworks-yYoAB5yKeloYxy03-WqXi4g-t500x500.jpg' alt='Imagen de la cancion' />
        </div>
        <div className='AudioPlayer-soundInfo'>
          <h3 className='AudioPlayer-soundName'>SET PSY 07</h3>
          <span className='AudioPlayer-artistName'>Spicy</span>
        </div>
        <div className='AudioPlayer-handleAudioPlayer'>
          <span className='AudioPlayer-currentTime'>{currentTime} - {duration}</span>
          <menu className='AudioPlayer-btnMenu'>
            <li className='AudioPlayer-item'>
              <Button
                img='src\assets\img\icons\IzquierdaReproductor.svg'
                imgAlt='Boton para ir a la siguiente cancion'
                handleClick={undefined}
                disabled={false}
                modifire='audioPlayerBtn'
              />
            </li>
            <li className='AudioPlayer-item'>
              <Button
                img={!isPlayed ? 'src/assets/img/icons/Play.svg' : 'src/assets/img/icons/Pause.svg'}
                imgAlt='Boton para reproducir o pausar cancion'
                handleClick={handlePlayed}
                disabled={false}
                modifire='audioPlayerPlayedBtn'
              />
            </li>
            <li className='AudioPlayer-item'>
              <Button
                img='src\assets\img\icons\DerechaReproductor.svg'
                imgAlt='Boton para ir a la anterior cancion'
                handleClick={undefined}
                disabled={false}
                modifire='audioPlayerBtn'
              />
            </li>
          </menu>
        </div>
        <ReactPlayer
          url='https://soundcloud.com/araceliriogonzalez/set-psy-08'
          style={{ display: 'none' }}
          playing={!!isPlayed}
        />
      </div>
    </>
  )
}

export default AudioPlayer
