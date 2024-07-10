import './LinkTo.css'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function LinkTo ({ linkTo, isBlankInitialization, text, icon, modifier }) {
  const [isBlank] = useState(isBlankInitialization)
  return (
    <>
      <a href={linkTo} className={`LinkTo LinkTo--${modifier}`} target={isBlank ? '_blank' : ''} rel='noreferrer'>
        {icon && (<FontAwesomeIcon icon={icon} className={`LinkTo-icon LinkTo-icon--${modifier}`} />)}
        {text && (<span className={`LinkTo-text LinkTo-text--${modifier}`}>{text}</span>)}
      </a>
    </>
  )
}

export default LinkTo
