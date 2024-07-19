import { useState, useEffect } from 'react'

const useSideBar = () => {
  const [isOpen, setIsOpen] = useState(false)

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

export { useSideBar }
