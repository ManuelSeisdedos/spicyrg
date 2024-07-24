import './AudioPlayer.css'
import { useEffect, useState } from 'react'
import ReactPlayer from 'react-player/soundcloud'
import Button from '../../core/Button/Button'

function AudioPlayer ({ songs }) {
  const [totalSongs] = useState(songs.length)
  const [currentIndexSong, setCurrentIndexSong] = useState(0)
  const [songData, setSongData] = useState({})
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime] = useState('0:00')
  const [duration] = useState('0:00')

  const handlePlaying = () => {
    setIsPlaying(!isPlaying)
  }

  const handleNextSong = () => {
    if (currentIndexSong >= 0 && currentIndexSong < totalSongs - 1) {
      const nextIndexSong = currentIndexSong + 1
      const nextSong = songs.at(nextIndexSong)
      setCurrentIndexSong(nextIndexSong)
      setSongData(nextSong)
    }
    if (currentIndexSong >= totalSongs - 1) {
      const nextSong = songs.at(0)
      setCurrentIndexSong(0)
      setSongData(nextSong)
    }
  }

  const handlePreviousSong = () => {
    if (currentIndexSong > 0 && currentIndexSong <= totalSongs - 1) {
      const previousIndexSong = currentIndexSong - 1
      const previousSong = songs.at(previousIndexSong)
      setCurrentIndexSong(previousIndexSong)
      setSongData(previousSong)
    }
    if (currentIndexSong <= 0) {
      const nextSong = songs.at(totalSongs - 1)
      setCurrentIndexSong(totalSongs - 1)
      setSongData(nextSong)
    }
  }

  useEffect(() => {
    const openingSong = songs.at(0)
    setSongData(openingSong)
  }, [])

  return (
    <>
      <div className='AudioPlayer'>
        <div className='AudioPlayer-songImg'>
          <img className='AudioPlayer-img' src={songData.songImgUrl} alt={songData.songImgAlt} />
        </div>
        <div className='AudioPlayer-songInfo'>
          <h3 className='AudioPlayer-songName'>{songData.songName}</h3>
          <span className='AudioPlayer-artistName'>{songData.artistName}</span>
        </div>
        <div className='AudioPlayer-handleAudioPlayer'>
          <span className='AudioPlayer-currentTime'>{currentTime} - {duration}</span>
          <menu className='AudioPlayer-btnMenu'>
            <li className='AudioPlayer-item'>
              <Button
                img='src\assets\img\icons\IzquierdaReproductor.svg'
                imgAlt='Boton para ir a la siguiente cancion'
                handleClick={handleNextSong}
                disabled={false}
                modifire='audioPlayerPreviousBtn'
              />
            </li>
            <li className='AudioPlayer-item'>
              <Button
                img={!isPlaying ? 'src/assets/img/icons/Play.svg' : 'src/assets/img/icons/Pause.svg'}
                imgAlt='Boton para reproducir o pausar cancion'
                handleClick={handlePlaying}
                disabled={false}
                modifire='audioPlayerPlayingBtn'
              />
            </li>
            <li className='AudioPlayer-item'>
              <Button
                img='src\assets\img\icons\DerechaReproductor.svg'
                imgAlt='Boton para ir a la anterior cancion'
                handleClick={handlePreviousSong}
                disabled={false}
                modifire='audioPlayerNextBtn'
              />
            </li>
          </menu>
        </div>
        <ReactPlayer
          url={songData.songUrl}
          width='0px'
          height='0px'
          style={{ display: 'none' }}
          playing={!!isPlaying}
        />
      </div>
    </>
  )
}

export default AudioPlayer
