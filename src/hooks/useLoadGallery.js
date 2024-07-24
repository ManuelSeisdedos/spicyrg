import { useState, useEffect } from 'react'
import { getInstagramPosts } from '../services/getInstagramPosts.js'

const useLoadGallery = () => {
  const [gallery, setGallery] = useState([])
  const [isLoadMore, setIsLoadMore] = useState(false)

  const handleClick = () => {
    setIsLoadMore(!isLoadMore)
  }

  useEffect(() => {
    getInstagramPosts().then((instagramPosts) => {
      if (!isLoadMore) {
        const newInstagramPosts = instagramPosts.slice(0, 6)
        setGallery(newInstagramPosts)
      } else {
        setGallery(instagramPosts)
      }
    })
  }, [isLoadMore])

  return { gallery, isLoadMore, handleClick }
}

export { useLoadGallery }
