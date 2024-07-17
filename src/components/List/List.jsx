import './List.css'
import { useState } from 'react'
import { mapItems } from '../../utils/mapItems'

function List ({ children, isOrderedInitialization, title, items, modifire }) {
  const [isOrdered] = useState(isOrderedInitialization)

  return (
    <>
      {title && (<h3>{title}</h3>)}
      {isOrdered
        ? (
          <ol className={`List List--${modifire}`}>
            {items && (
              mapItems(children, items, `List-item List-item--${modifire}`)
            )}
          </ol>
          )
        : (
          <ul className={`List List--${modifire}`}>
            {items && (
              mapItems(children, items, `List-item List-item--${modifire}`)
            )}
          </ul>
          )}
    </>
  )
}

export default List
