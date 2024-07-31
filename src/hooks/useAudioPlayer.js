import { useEffect, useState, useCallback } from 'react'

const useAudioPlayer = (songs) => {
  const [totalSongs] = useState(songs.length)
  const [currentIndexSong, setCurrentIndexSong] = useState(0)
  const [songData, setSongData] = useState({})
  const [isReady, setIsReady] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [onCurrentTimeCalled, setOnCurrentTimeCalled] = useState()
  const [onDurationCalled, setOnDurationCalled] = useState()
  const [onErrorCalled, setOnErrorCalled] = useState(false)

  const format = useCallback((seconds) => {
    const pad = (string) => ('0' + string).slice(-2)
    const date = new Date(seconds * 1000)
    const hh = date.getUTCHours()
    const mm = date.getUTCMinutes()
    const ss = pad(date.getUTCSeconds())
    return hh ? `${hh}:${pad(mm)}:${ss}` : `${mm}:${ss}`
  }, [])

  const handleReady = useCallback((value) => {
    setIsReady(value)
  }, [])

  const handleCurrentTime = useCallback((value) => {
    setOnCurrentTimeCalled(value)
  }, [])

  const handleDuration = useCallback((value) => {
    setOnDurationCalled(value)
  }, [])

  const handlePlaying = useCallback(() => {
    setIsPlaying((prev) => !prev)
  }, [])

  const handleNextSong = useCallback(() => {
    handleError(false)
    handleReady(false)
    setCurrentIndexSong((prev) => {
      const nextIndexSong = (prev + 1) % totalSongs
      setSongData(songs[nextIndexSong])
      return nextIndexSong
    })
  }, [songs, totalSongs])

  const handlePreviousSong = useCallback(() => {
    handleError(false)
    handleReady(false)
    setCurrentIndexSong((prev) => {
      const previousIndexSong = (prev - 1 + totalSongs) % totalSongs
      setSongData(songs[previousIndexSong])
      return previousIndexSong
    })
  }, [songs, totalSongs])

  const handleError = useCallback((value) => {
    setOnErrorCalled(value)
  }, [])

  useEffect(() => {
    setSongData(songs[0])
  }, [songs])

  return {
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
  }
}

export { useAudioPlayer }
