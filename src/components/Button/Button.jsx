import './Button.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Button ({ text, icon, handleClick }) {
  return (
    <>
      <button className='Button' onClick={handleClick}>
        {icon && (<FontAwesomeIcon icon={icon} className='Button-icon' />)}
        {text && (<span className='Button-text'>{text}</span>)}
      </button>
    </>
  )
}

export default Button
