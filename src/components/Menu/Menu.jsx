import './Menu.css'
import { useMenu } from '../../hooks/useMenu.js'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import Button from '../Button/Button.jsx'
import LinkTo from '../LinkTo/LinkTo.jsx'
import Nav from '../Nav/Nav.jsx'
import { navItems } from '../../consts/navItems.js'

function Menu ({ modifire }) {
  const { isOpen, handleClick } = useMenu()

  return (
    <>
      <div className={`Menu Menu--${modifire}`}>
        <div className={`Menu-btn Menu-btn--${modifire}`}>
          <Button
            icon={faBars}
            handleClick={handleClick}
            modifier='menu'
          />
        </div>
        <div className={`Menu-container Menu-container--${modifire} ${isOpen ? '' : 'is-open'}`}>
          <div className={`Menu-sideBar Menu-sideBar--${modifire} ${isOpen ? '' : 'is-open'}`}>
            <Button
              icon={faXmark}
              handleClick={handleClick}
              modifier='sidebar'
            />
            <Nav
              items={navItems}
              modifire='sidebar'
            >
              <LinkTo />
            </Nav>
          </div>
          <div
            className={`Menu-cancelSideBar Menu-cancelSideBar--${modifire}`}
            onClick={!isOpen ? undefined : handleClick}
          />
        </div>
      </div>
    </>
  )
}

export default Menu
