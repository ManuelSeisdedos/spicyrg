import './Nav.css'
import List from '../List/List.jsx'
import LinkTo from '../LinkTo/LinkTo.jsx'

function Nav ({ modifire, items }) {
  return (
    <>
      <nav className={`Nav Nav--${modifire}`}>
        <List
          isOrderedInitialization={false}
          items={items}
          modifire='nav'
        >
          <LinkTo />
        </List>
      </nav>
    </>
  )
}

export default Nav
