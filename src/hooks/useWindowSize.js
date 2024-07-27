import { useEffect, useState } from 'react'

const useWindowSize = () => {
  const [width, setWidth] = useState(window.innerWidth)

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth)
  }
  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange)
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange)
    }
  }, [width])

  const isMobile = width <= 499

  return { isMobile }
}

export { useWindowSize }
