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

  return { isMobile: width < 500 }
}

export { useWindowSize }
