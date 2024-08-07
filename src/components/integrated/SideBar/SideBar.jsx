import './SideBar.css'
import sideBarIcon from '../../../assets/img/icons/side-bar-icon.svg'
import { useSideBar } from '../../../hooks/useSideBar.js'
import { socialMediaItems } from '../../../consts/socialMediaItems.js'
import Button from '../../core/Button/Button.jsx'
import LinkTo from '../../core/LinkTo/LinkTo.jsx'
import List from '../List/List.jsx'
import Nav from '../Nav/Nav.jsx'

function SideBar ({ navItems }) {
  const { isOpen, handleClick } = useSideBar()

  return (
    <>
      <div className='SideBar'>
        <menu className='SideBar-btnOpen'>
          <Button
            img={sideBarIcon}
            imgAlt='Ají rojo'
            handleClick={handleClick}
            modifire='sideBarBtnOpen'
          />
        </menu>
        <div className={`SideBar-container ${!isOpen ? '' : 'is-open'}`}>
          <div className={`SideBar-subcontainer ${!isOpen ? '' : 'is-open'}`}>
            <menu className='SideBar-btnClose'>
              <Button
                img={sideBarIcon}
                handleClick={handleClick}
                modifire='sideBarBntClose'
              />
            </menu>
            <div className='SideBar-nav'>
              <Nav
                items={navItems}
                eventOnClick={!isOpen ? undefined : handleClick}
                modifire='sideBarNav'
              >
                <LinkTo />
              </Nav>
            </div>
            <div className='SideBar-contact'>
              <List
                isOrderedInitialization={false}
                items={socialMediaItems}
                modifire='sideBarContact'
              >
                <LinkTo />
              </List>
            </div>
          </div>
          <div
            className='SideBar-cancelSideBar'
            onClick={!isOpen ? undefined : handleClick}
          />
        </div>
      </div>
    </>
  )
}

export default SideBar
