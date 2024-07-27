import { useState, useEffect } from 'react'
import { getInstagramPosts } from '../services/getInstagramPosts.js'

const useLoadGallery = () => {
  const [galleryMemory, setGalleryMemory] = useState([])
  const [gallery, setGallery] = useState([])
  const [isMoreThenSix, setIsMoreThenSix] = useState(false)
  const [isLoadMore, setIsLoadMore] = useState(false)

  const handleClick = () => {
    setIsLoadMore(!isLoadMore)
  }

  useEffect(() => {
    getInstagramPosts().then((instagramPosts) => {
      if (instagramPosts.length >= 7) {
        const newInstagramPosts = instagramPosts.slice(0, 12)
        setIsMoreThenSix(true)
        setGalleryMemory(newInstagramPosts)
      } else {
        setIsMoreThenSix(false)
        setGallery(instagramPosts)
      }
    })
  }, [])

  useEffect(() => {
    if (isLoadMore) {
      setGallery(galleryMemory)
    } else {
      const newGallery = galleryMemory.slice(0, 6)
      setGallery(newGallery)
    }
  }, [isMoreThenSix, isLoadMore])

  return { gallery, isMoreThenSix, isLoadMore, handleClick }
}

export { useLoadGallery }
