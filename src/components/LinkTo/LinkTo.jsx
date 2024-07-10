import './LinkTo.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function LinkTo ({ linkTo, text, icon, modifier }) {
  return (
    <>
      <a href={linkTo} className={`LinkTo LinkTo--${modifier}`}>
        {icon && (<FontAwesomeIcon icon={icon} className={`LinkTo-icon LinkTo-icon--${modifier}`} />)}
        {text && (<span className={`LinkTo-text LinkTo-text--${modifier}`}>{text}</span>)}
      </a>
    </>
  )
}

export default LinkTo
