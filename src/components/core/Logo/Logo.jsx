import './Logo.css'

function Logo ({ src, alt, modifire }) {
  return (
    <>
      <div className={`Logo Logo--${modifire}`}>
        {src && alt && (<img src={src} alt={alt} className={`Logo-img Logo-img--${modifire}`} />)}
      </div>
    </>
  )
}

export default Logo
