import './List.css'
import { cloneElement, useState } from 'react'

function List ({ children, isOrderedInitialization, title, items, modifire }) {
  const [isOrdered] = useState(isOrderedInitialization)

  return (
    <>
      {title && (<h3>{title}</h3>)}
      {isOrdered
        ? (
          <ol className={`List List--${modifire}`}>
            {items && (
              items.map((item) => (
                <li className={`List-item List-item--${modifire}`} key={item.id}>
                  {children && cloneElement(children, { ...item }/* Spread Operator */)}
                </li>
              ))
            )}
          </ol>
          )
        : (
          <ul className={`List List--${modifire}`}>
            {items && (
              items.map((item) => (
                <li className={`List-item List-item--${modifire}`} key={item.id}>
                  {children && cloneElement(children, { ...item }/* Spread Operator */)}
                </li>
              ))
            )}
          </ul>
          )}
    </>
  )
}

export default List
