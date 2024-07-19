import './Nav.css'
import List from '../List/List.jsx'

function Nav ({ children, items, modifire }) {
  return (
    <>
      <nav className={`Nav Nav--${modifire}`}>
        <List
          isOrderedInitialization={false}
          items={items}
          modifire={modifire}
        >
          {children && (children)}
        </List>
      </nav>
    </>
  )
}

export default Nav
