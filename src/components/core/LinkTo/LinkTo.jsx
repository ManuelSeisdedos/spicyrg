import './LinkTo.css'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function LinkTo ({ linkTo, isBlankInitialization, text, icon, img, imgAlt, modifire }) {
  const [isBlank] = useState(isBlankInitialization)
  return (
    <>
      <a href={linkTo} className={`LinkTo LinkTo--${modifire}`} target={isBlank ? '_blank' : ''} rel='noreferrer'>
        {icon && (<FontAwesomeIcon icon={icon} className={`LinkTo-icon LinkTo-icon--${modifire}`} />)}
        {img && (<img src={img} alt={imgAlt} className={`LinkTo-img LinkTo-img--${modifire}`} />)}
        {text && (<span className={`LinkTo-text LinkTo-text--${modifire}`}>{text}</span>)}
      </a>
    </>
  )
}

export default LinkTo
