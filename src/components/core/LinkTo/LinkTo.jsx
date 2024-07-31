import './LinkTo.css'
import { useState } from 'react'

function LinkTo ({ linkTo, isBlankInitialization, text, img, imgAlt, modifire }) {
  const [isBlank] = useState(isBlankInitialization)
  return (
    <>
      <a href={linkTo} className={`LinkTo LinkTo--${modifire}`} target={isBlank ? '_blank' : ''} rel='noreferrer'>
        {img && (<img src={img} alt={imgAlt} className={`LinkTo-img LinkTo-img--${modifire}`} />)}
        {text && (<span className={`LinkTo-text LinkTo-text--${modifire}`}>{text}</span>)}
      </a>
    </>
  )
}

export default LinkTo
