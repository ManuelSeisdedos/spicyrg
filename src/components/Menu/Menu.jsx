import './Menu.css'
import { useMenu } from '../../hooks/useMenu.js'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import Button from '../Button/Button.jsx'
import SideBar from '../SideBar/SideBar.jsx'
import Nav from '../Nav/Nav.jsx'
import { navItems } from '../../consts/navItems.js'

function Menu () {
  const { isOpen, handleClick } = useMenu()
  return (
    <>
      <Button
        icon={faBars}
        handleClick={handleClick}
        modifier='menu'
      />
      <SideBar
        modifire={`menu ${isOpen ? 'is-open' : ''}`}
      >
        <Nav
          items={navItems}
          modifire='sidebar'
        />
        <Button
          icon={faXmark}
          handleClick={handleClick}
          modifier='sidebar'
        />
      </SideBar>
    </>
  )
}

export default Menu
