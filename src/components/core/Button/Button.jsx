import './Button.css'

function Button ({ text, img, imgAlt, handleClick, disabled, modifire }) {
  return (
    <>
      <button className={`Button Button--${modifire}`} onClick={handleClick} disabled={disabled}>
        {img && (<img src={img} alt={imgAlt} className={`Button-img Button-img--${modifire}`} />)}
        {text && (<span className={`Button-text Button-text--${modifire}`}>{text}</span>)}
      </button>
    </>
  )
}

export default Button
