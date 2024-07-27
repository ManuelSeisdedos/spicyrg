import { useEffect, useState } from 'react'

const useAudioPlayer = (songs) => {
  const [totalSongs] = useState(songs.length)
  const [currentIndexSong, setCurrentIndexSong] = useState(0)
  const [songData, setSongData] = useState({})
  const [isReady, setIsReady] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState('0:00')
  const [duration, setDuration] = useState('0:00')

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
    setCurrentTime(value)
  }

  const handleDuration = (value) => {
    setDuration(value)
  }

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

  useEffect(() => {
    const openingSong = songs.at(0)
    setSongData(openingSong)
  }, [])

  return { isReady, songData, isPlaying, currentTime, duration, format, handleReady, handleCurrentTime, handleDuration, handlePlaying, handleNextSong, handlePreviousSong }
}

export { useAudioPlayer }
