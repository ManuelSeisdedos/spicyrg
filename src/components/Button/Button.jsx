import './Button.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Button ({ text, icon, handleClick, modifire }) {
  return (
    <>
      <button className={`Button Button--${modifire}`} onClick={handleClick}>
        {icon && (<FontAwesomeIcon icon={icon} className={`Button-icon Button-icon--${modifire}`} />)}
        {text && (<span className={`Button-text Button-text--${modifire}`}>{text}</span>)}
      </button>
    </>
  )
}

export default Button
