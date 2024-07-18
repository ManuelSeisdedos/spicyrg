import { cloneElement } from 'react'

const mapItems = (children, items, className) => {
  return items.map((item) => (
    <li className={className} key={item.id}>
      {children && cloneElement(children, { ...item }/* Spread Operator */)}
    </li>
  ))
}

export { mapItems }
