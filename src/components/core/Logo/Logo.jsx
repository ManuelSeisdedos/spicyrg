import './Logo.css'

function Logo ({ src, alt, modifier }) {
  return (
    <>
      <div className={`Logo Logo--${modifier}`}>
        <img src={src} alt={alt} className={`Logo-img Logo-img--${modifier}`} />
      </div>
    </>
  )
}

export default Logo
