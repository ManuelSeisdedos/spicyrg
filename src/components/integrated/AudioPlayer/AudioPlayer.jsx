import './AudioPlayer.css'
import { useAudioPlayer } from '../../../hooks/useAudioPlayer.js'
import ReactPlayer from 'react-player/soundcloud'
import Button from '../../core/Button/Button.jsx'
import Logo from '../../core/Logo/Logo.jsx'
import List from '../List/List.jsx'
import LoadingSong from '../LoadingSong/LoadingSong.jsx'

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

  const btnsAudioPlayer = [
    {
      uuid: crypto.randomUUID(),
      img: 'src/assets/img/icons/IzquierdaReproductor.svg',
      imgAlt: 'Boton para ir a la anterior cancion',
      handleClick: handlePreviousSong,
      disabled: false,
      modifire: 'audioPlayerNextBtn'
    },
    {
      uuid: crypto.randomUUID(),
      img: !isPlaying ? 'src/assets/img/icons/Play.svg' : 'src/assets/img/icons/Pause.svg',
      imgAlt: 'Boton para reproducir o pausar cancion',
      handleClick: handlePlaying,
      disabled: false,
      modifire: 'audioPlayerPlayingBtn'
    },
    {
      uuid: crypto.randomUUID(),
      img: 'src/assets/img/icons/DerechaReproductor.svg',
      imgAlt: 'Boton para ir a la siguiente cancion',
      handleClick: handleNextSong,
      disabled: false,
      modifire: 'audioPlayerPreviousBtn'
    }
  ]

  return (
    <>
      <div className='AudioPlayer'>
        {isReady && currentTime && duration
          ? (
            <>
              <Logo
                src={songData.songImgUrl}
                alt={songData.songImgAlt}
                modifire='audioPlayerSongImg'
              />
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
            <LoadingSong />
            )}
        <div className='AudioPlayer-handleAudioPlayer'>
          <List
            isOrderedInitialization={false}
            items={btnsAudioPlayer}
            modifire='audioPlayerBtns'
          >
            <Button />
          </List>
        </div>
        {songData &&
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
          />}
      </div>
    </>
  )
}

export default AudioPlayer
