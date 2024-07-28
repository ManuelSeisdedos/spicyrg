import { useState, useEffect } from 'react'

const useHideOnScroll = () => {
  const [isScroll, setIsScroll] = useState(false)
  const [lastScroll, setLastScroll] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (document.documentElement.scrollTop > lastScroll) {
        setIsScroll(true)
      } else {
        setIsScroll(false)
      }
      setLastScroll(document.documentElement.scrollTop)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [lastScroll])

  return { isScroll }
}

export { useHideOnScroll }
