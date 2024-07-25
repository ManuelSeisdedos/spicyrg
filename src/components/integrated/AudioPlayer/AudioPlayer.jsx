import './AudioPlayer.css'
import { useEffect, useState } from 'react'
import ReactPlayer from 'react-player/soundcloud'

import Button from '../../core/Button/Button'

function AudioPlayer ({ songs }) {
  const [isReady, setIsReady] = useState(false)
  const [totalSongs] = useState(songs.length)
  const [currentIndexSong, setCurrentIndexSong] = useState(0)
  const [songData, setSongData] = useState({})
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState()
  const [duration, setDuration] = useState()

  const handlePlaying = () => {
    setIsPlaying(!isPlaying)
  }

  const handleNextSong = () => {
    setIsReady(false)
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
    setIsReady(false)
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

  function format (seconds) {
    const date = new Date(seconds * 1000)
    const hh = date.getUTCHours()
    const mm = date.getUTCMinutes()
    const ss = pad(date.getUTCSeconds())
    if (hh) {
      return `${hh}:${pad(mm)}:${ss}`
    }
    return `${mm}:${ss}`
  }

  function pad (string) {
    return ('0' + string).slice(-2)
  }

  useEffect(() => {
    const openingSong = songs.at(0)
    setSongData(openingSong)
  }, [])

  return (
    <>
      <div className='AudioPlayer'>
        {isReady
          ? (
            <>
              <div className='AudioPlayer-songImg'>
                <img className='AudioPlayer-img' src={songData.songImgUrl} alt={songData.songImgAlt} />
              </div>
              <div className='AudioPlayer-songInfo'>
                <h3 className='AudioPlayer-songName'>{songData.songName}</h3>
                <span className='AudioPlayer-artistName'>{songData.artistName}</span>
              </div>
              <div className=''>
                <span className='AudioPlayer-currentTime'>{currentTime} - {duration}</span>
              </div>
            </>
            )
          : (<span>Cargando...</span>)}
        <div className='AudioPlayer-handleAudioPlayer'>
          <menu className='AudioPlayer-btnMenu'>
            <li className='AudioPlayer-item'>
              <Button
                img='src\assets\img\icons\IzquierdaReproductor.svg'
                imgAlt='Boton para ir a la anterior cancion'
                handleClick={handlePreviousSong}
                disabled={false}
                modifire='audioPlayerNextBtn'
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
                imgAlt='Boton para ir a la siguiente cancion'
                handleClick={handleNextSong}
                disabled={false}
                modifire='audioPlayerPreviousBtn'
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
          volume={0.7}
          onReady={() => {
            setIsReady(true)
          }}
          onProgress={(progress) => {
            const formatProgress = format(progress.playedSeconds)
            setCurrentTime(formatProgress)
          }}
          onDuration={(duration) => {
            const formatDuration = format(duration)
            setDuration(formatDuration)
          }}
          onEnded={() => {
            handleNextSong()
          }}
        />
      </div>
    </>
  )
}

export default AudioPlayer
