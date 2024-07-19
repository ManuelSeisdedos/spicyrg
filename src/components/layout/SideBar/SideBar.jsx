import './SideBar.css'
import { useSideBar } from '../../../hooks/useSideBar.js'
import Button from '../../core/Button/Button.jsx'
import LinkTo from '../../core/LinkTo/LinkTo.jsx'
import List from '../../integrated/List/List.jsx'
import Nav from '../../integrated/Nav/Nav.jsx'
import { navItems } from '../../../consts/navItems.js'
import { socialMediaItems } from '../../../consts/socialMediaItems.js'

function SideBar () {
  const { isOpen, handleClick } = useSideBar()

  return (
    <>
      <div className='SideBar'>
        <div className='SideBar-btnOpen'>
          <Button
            svg='src/assets/img/icons/SideBar.svg'
            handleClick={handleClick}
            modifire='sideBarBtnOpen'
          />
        </div>
        <div className={`SideBar-container ${!isOpen ? '' : 'is-open'}`}>
          <div className={`SideBar-subcontainer ${!isOpen ? '' : 'is-open'}`}>
            <div className='SideBar-btnClose'>
              <Button
                svg='src/assets/img/icons/SideBarActivada.svg'
                handleClick={handleClick}
                modifire='sideBarBntClose'
              />
            </div>
            <div className='SideBar-nav'>
              <Nav
                items={navItems}
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
