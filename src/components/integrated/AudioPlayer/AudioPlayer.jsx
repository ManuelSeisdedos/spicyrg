import './AudioPlayer.css'
import izReproductorIcon from '../../../assets/img/icons/izquierda-reproductor-icon.svg'
import playIcon from '../../../assets/img/icons/play-icon.svg'
import pauseIcon from '../../../assets/img/icons/pause-icon.svg'
import deReproductorIcon from '../../../assets/img/icons/derecha-reproductor-icon.svg'
import { memo, useMemo } from 'react'
import { v4 as uuidv4 } from 'uuid'
import ReactPlayer from 'react-player/soundcloud'
import { useAudioPlayer } from '../../../hooks/useAudioPlayer.js'
import Button from '../../core/Button/Button.jsx'
import Logo from '../../core/Logo/Logo.jsx'
import List from '../List/List.jsx'
import LoadingSong from '../../notifications/LoadingSong/LoadingSong.jsx'
import ErrorLoadingSong from '../../notifications/ErrorLoadingSong/ErrorLoadingSong.jsx'

function AudioPlayer ({ songs }) {
  const {
    isReady,
    songData,
    isPlaying,
    onCurrentTimeCalled,
    onDurationCalled,
    onErrorCalled,
    format,
    handleReady,
    handleCurrentTime,
    handleDuration,
    handlePlaying,
    handleNextSong,
    handlePreviousSong,
    handleError
  } = useAudioPlayer(songs)

  const btnsAudioPlayer = useMemo(() => [
    {
      uuid: uuidv4(),
      img: izReproductorIcon,
      imgAlt: 'Boton para ir a la anterior cancion',
      handleClick: handlePreviousSong,
      disabled: false,
      modifire: 'audioPlayerPreviousBtn'
    },
    {
      uuid: uuidv4(),
      img: !isPlaying ? playIcon : pauseIcon,
      imgAlt: 'Boton para reproducir o pausar cancion',
      handleClick: handlePlaying,
      disabled: false,
      modifire: 'audioPlayerPlayingBtn'
    },
    {
      uuid: uuidv4(),
      img: deReproductorIcon,
      imgAlt: 'Boton para ir a la siguiente cancion',
      handleClick: handleNextSong,
      disabled: false,
      modifire: 'audioPlayerNextBtn'
    }
  ], [handlePreviousSong, handlePlaying, isPlaying, handleNextSong])

  const playerConfig = useMemo(() => ({
    url: songData?.songUrl,
    width: '0px',
    height: '0px',
    style: { display: 'none' },
    playing: !!isPlaying,
    volume: 0.7,
    onReady: () => { handleReady(true) },
    onProgress: (progress) => {
      const formatProgress = format(progress.playedSeconds)
      handleCurrentTime(formatProgress)
    },
    onDuration: (duration) => {
      const formatDuration = format(duration)
      handleDuration(formatDuration)
    },
    onEnded: handleNextSong,
    onError: () => { handleError(true) }
  }), [songData, isPlaying, handleReady, format, handleCurrentTime, handleDuration, handleNextSong, handleError])

  return (
    <>
      {songData && songData.songBackgroundImg && (
        <div
          className='AudioPlayer' style={{ backgroundImage: `url(${songData.songBackgroundImg})` }}
        >
          <div className='AudioPlayer-container'>
            {onErrorCalled
              ? (<ErrorLoadingSong />)
              : isReady
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
                      {!onCurrentTimeCalled && onDurationCalled
                        ? (<></>)
                        : (<span className='AudioPlayer-timeSpan'>{onCurrentTimeCalled} - {onDurationCalled}</span>)}
                    </div>
                  </>
                  )
                : (<LoadingSong />)}
            <div className='AudioPlayer-handleAudioPlayer'>
              <List
                isOrderedInitialization={false}
                items={btnsAudioPlayer}
                modifire='audioPlayerBtns'
              >
                <Button />
              </List>
            </div>
            <ReactPlayer
              {...playerConfig}
            />
          </div>
        </div>
      )}
    </>
  )
}

export default memo(AudioPlayer)
