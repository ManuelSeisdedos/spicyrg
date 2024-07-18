import './LinkTo.css'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function LinkTo ({ linkTo, isBlankInitialization, text, icon, svg, modifier }) {
  const [isBlank] = useState(isBlankInitialization)
  return (
    <>
      <a href={linkTo} className={`LinkTo LinkTo--${modifier}`} target={isBlank ? '_blank' : ''} rel='noreferrer'>
        {icon && (<FontAwesomeIcon icon={icon} className={`LinkTo-icon LinkTo-icon--${modifier}`} />)}
        {svg && (<img src={svg} alt='' className={`LinkTo-svg LinkTo-svg--${modifier}`} />)}
        {text && (<span className={`LinkTo-text LinkTo-text--${modifier}`}>{text}</span>)}
      </a>
    </>
  )
}

export default LinkTo
