import './LinkTo.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function LinkTo ({ linkTo, text, icon }) {
  return (
    <>
      <a href={linkTo} className='LinkTo'>
        {icon && (<FontAwesomeIcon icon={icon} className='LinkTo-icon' />)}
        {text && (<span className='LinkTo-text'>{text}</span>)}
      </a>
    </>
  )
}

export default LinkTo
