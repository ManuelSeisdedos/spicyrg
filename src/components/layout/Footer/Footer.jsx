import './Footer.css'
import { contactItems } from '../../../consts/contactItems.js'
import List from '../../integrated/List/List.jsx'
import LinkTo from '../../core/LinkTo/LinkTo.jsx'

function Footer ({ children, modifier }) {
  return (
    <>
      <footer className={`Footer Footer--${modifier}`}>
        {children && (
          children
        )}
        {
          contactItems && (
            contactItems.map((list) => (
              <div className={`Footer-list Footer-list--${modifier}`} key={list.id}>
                <List
                  isOrderedInitialization={false}
                  title={list.title}
                  items={list.items}
                  modifire='footer'
                >
                  <LinkTo />
                </List>
              </div>
            ))
          )
        }
      </footer>
    </>
  )
}

export default Footer
