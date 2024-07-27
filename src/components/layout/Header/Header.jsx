import './Header.css'
import { useWindowSize } from '../../../hooks/useWindowSize.js'
import { navItems } from '../../../consts/navItems.js'
import LinkTo from '../../core/LinkTo/LinkTo.jsx'
import Nav from '../../integrated/Nav/Nav.jsx'
import SideBar from '../../integrated/SideBar/SideBar.jsx'
import { useEffect, useState } from 'react'

function Header () {
  const { isMobile } = useWindowSize()
  const [desktopNavItems, setDesktopNavItems] = useState([])

  useEffect(() => {
    const firts = navItems.slice(0, 1)
    const array1 = navItems.slice(1, 3)
    const array2 = navItems.slice(3, 5)
    setDesktopNavItems([...array1, ...firts, ...array2])
  }, [])

  return (
    <>
      <header className='Header'>
        {isMobile
          ? (
            <SideBar
              navItems={navItems}
            />
            )
          : (
            <Nav
              items={desktopNavItems}
              modifire='headerNav'
            >
              <LinkTo />
            </Nav>
            )}
      </header>
    </>
  )
}

export default Header
