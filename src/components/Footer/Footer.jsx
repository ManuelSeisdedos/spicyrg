import './Footer.css'
import { footerLists } from '../../consts/footerLists.js'
import List from '../List/List.jsx'
import LinkTo from '../LinkTo/LinkTo.jsx'

function Footer ({ children, modifier }) {
  return (
    <>
      <footer className={`Footer Footer--${modifier}`}>
        {children && (
          children
        )}
        {
          footerLists && (
            footerLists.map((list) => (
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
