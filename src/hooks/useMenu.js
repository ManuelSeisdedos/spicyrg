import { useState, useEffect } from 'react'

const useMenu = () => {
  const [isOpen, setIsOpen] = useState()
  const handleClick = () => {
    setIsOpen(!isOpen)
  }
  useEffect(() => {
    // no-scroll on index.css
    document.body.classList.toggle('no-scroll', isOpen)

    return () => {
      document.body.classList.remove('no-scroll')
    }
  }, [isOpen])

  return { isOpen, handleClick }
}

export { useMenu }
