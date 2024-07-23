import './Button.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Button ({ text, icon, img, handleClick, modifire }) {
  return (
    <>
      <button className={`Button Button--${modifire}`} onClick={handleClick}>
        {icon && (<FontAwesomeIcon icon={icon} className={`Button-icon Button-icon--${modifire}`} />)}
        {img && (<img src={img} alt='' className={`Button-img Button-img--${modifire}`} />)}
        {text && (<span className={`Button-text Button-text--${modifire}`}>{text}</span>)}
      </button>
    </>
  )
}

export default Button
