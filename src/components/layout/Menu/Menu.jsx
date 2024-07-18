import './Menu.css'
import { useMenu } from '../../../hooks/useMenu.js'
import Button from '../../core/Button/Button.jsx'
import LinkTo from '../../core/LinkTo/LinkTo.jsx'
import List from '../../integrated/List/List.jsx'
import Nav from '../../integrated/Nav/Nav.jsx'
import { navItems } from '../../../consts/navItems.js'
import { contactItems } from '../../../consts/contactItems.js'

function Menu ({ modifire }) {
  const { isOpen, handleClick } = useMenu()

  return (
    <>
      <div className={`Menu Menu--${modifire}`}>
        <div className={`Menu-btnOpen Menu-btnOpen--${modifire}`}>
          <Button
            svg='src/assets/img/icons/SideBar.svg'
            handleClick={handleClick}
            modifire='menuBtnOpen'
          />
        </div>
        <div className={`Menu-container Menu-container--${modifire} ${!isOpen ? '' : 'is-open'}`}>
          <div className={`Menu-sideBar Menu-sideBar--${modifire} ${!isOpen ? '' : 'is-open'}`}>
            <div className={`Menu-btnClose Menu-btnClose--${modifire}`}>
              <Button
                svg='src/assets/img/icons/SideBarActivada.svg'
                handleClick={handleClick}
                modifire='menuBntClose'
              />
            </div>
            <div className={`Menu-nav Menu-nav--${modifire}`}>
              <Nav
                items={navItems}
                modifire='menuNav'
              >
                <LinkTo />
              </Nav>
            </div>
            <div className={`Menu-contact Menu-contact--${modifire}`}>
              <List
                isOrderedInitialization={false}
                items={contactItems}
                modifire='menuContact'
              >
                <LinkTo />
              </List>
            </div>
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
