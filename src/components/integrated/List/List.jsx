import './List.css'
import { useState, cloneElement } from 'react'

function List ({ children, isOrderedInitialization, items, modifire }) {
  const [isOrdered] = useState(isOrderedInitialization)

  const mapItems = (children, items, className) => {
    return items.map((item) => (
      <li className={className} key={item.id}>
        {children && cloneElement(children, { ...item }/* Spread Operator */)}
      </li>
    ))
  }

  return (
    <>
      {!isOrdered
        ? (
          <ul className={`UnorderedList UnorderedList--${modifire}`}>
            {items && (
              mapItems(children, items, `UnorderedList-item UnorderedList-item--${modifire}`)
            )}
          </ul>
          )
        : (
          <ol className={`OrderedList OrderedList--${modifire}`}>
            {items && (
              mapItems(children, items, `OrderedList-item OrderedList-item--${modifire}`)
            )}
          </ol>
          )}
    </>
  )
}

export default List
