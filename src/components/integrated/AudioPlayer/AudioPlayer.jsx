import './AudioPlayer.css'
import { useAudioPlayer } from '../../../hooks/useAudioPlayer'
import ReactPlayer from 'react-player/soundcloud'
import Button from '../../core/Button/Button'

function AudioPlayer ({ songs }) {
  const {
    isReady,
    songData,
    isPlaying,
    currentTime,
    duration,
    format,
    handleReady,
    handleCurrentTime,
    handleDuration,
    handlePlaying,
    handleNextSong,
    handlePreviousSong
  } = useAudioPlayer(songs)

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
              <div className='AudioPlayer-time'>
                <span className='AudioPlayer-timeSpan'>{currentTime} - {duration}</span>
              </div>
            </>
            )
          : (
            <>
              <div className='Load'>
                <div className='Load-songImg'>
                  <div className='Load-img' />
                </div>
                <div className='Load-songInfo'>
                  <div className='Load-songName' />
                  <div className='Load-artistName' />
                </div>
                <div className='Load-time'>
                  <div className='Load-timeSpan' />
                </div>
              </div>
            </>
            )}
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
            handleReady(true)
          }}
          onProgress={(progress) => {
            const formatProgress = format(progress.playedSeconds)
            handleCurrentTime(formatProgress)
          }}
          onDuration={(duration) => {
            const formatDuration = format(duration)
            handleDuration(formatDuration)
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
