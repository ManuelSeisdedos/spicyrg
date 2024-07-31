import './List.css'
import { useState, cloneElement } from 'react'

function List ({ children, isOrderedInitialization, items, eventOnClick, modifire }) {
  const [isOrdered] = useState(isOrderedInitialization)

  const mapItems = (className) => {
    return items.map((item) => (
      <li className={className} key={item.uuid} onClick={eventOnClick}>
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
              mapItems(`UnorderedList-item UnorderedList-item--${modifire}`)
            )}
          </ul>
          )
        : (
          <ol className={`OrderedList OrderedList--${modifire}`}>
            {items && (
              mapItems(`OrderedList-item OrderedList-item--${modifire}`)
            )}
          </ol>
          )}
    </>
  )
}

export default List
