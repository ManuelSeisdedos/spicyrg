import { useEffect, useState } from 'react'

const useAudioPlayer = (songs) => {
  const [totalSongs] = useState(songs.length)
  const [currentIndexSong, setCurrentIndexSong] = useState(0)
  const [songData, setSongData] = useState({})
  const [isReady, setIsReady] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [onCurrentTimeCalled, setOnCurrentTimeCalled] = useState()
  const [onDurationCalled, setOnDurationCalled] = useState()
  const [onErrorCalled, setOnErrorCalled] = useState(false)

  const format = (seconds) => {
    const date = new Date(seconds * 1000)
    const hh = date.getUTCHours()
    const mm = date.getUTCMinutes()
    const ss = pad(date.getUTCSeconds())
    if (hh) {
      return `${hh}:${pad(mm)}:${ss}`
    }
    return `${mm}:${ss}`
  }

  const pad = (string) => {
    return ('0' + string).slice(-2)
  }

  const handleReady = (value) => {
    setIsReady(value)
  }

  const handleCurrentTime = (value) => {
    setOnCurrentTimeCalled(value)
  }

  const handleDuration = (value) => {
    setOnDurationCalled(value)
  }

  const handlePlaying = () => {
    setIsPlaying(!isPlaying)
  }

  const handleNextSong = () => {
    handleError(false)
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
    handleError(false)
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

  const handleError = (value) => {
    setOnErrorCalled(value)
  }

  useEffect(() => {
    const openingSong = songs.at(0)
    setSongData(openingSong)
  }, [])

  return { isReady, songData, isPlaying, onCurrentTimeCalled, onDurationCalled, onErrorCalled, format, handleReady, handleCurrentTime, handleDuration, handlePlaying, handleNextSong, handlePreviousSong, handleError }
}

export { useAudioPlayer }
