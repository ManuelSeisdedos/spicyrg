import './List.css'
import { useState } from 'react'
import { mapItems } from '../../../utils/mapItems.jsx'

function List ({ children, isOrderedInitialization, items, modifire }) {
  const [isOrdered] = useState(isOrderedInitialization)

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
