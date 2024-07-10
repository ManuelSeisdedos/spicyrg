import './Button.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Button ({ text, icon, modifier, handleClick }) {
  return (
    <>
      <button className={`Button Button--${modifier}`} onClick={handleClick}>
        {icon && (<FontAwesomeIcon icon={icon} className={`Button-icon Button-icon--${modifier}`} />)}
        {text && (<span className={`Button-text Button-text--${modifier}`}>{text}</span>)}
      </button>
    </>
  )
}

export default Button
