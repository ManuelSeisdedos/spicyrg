import './Header.css'

function Header ({ children, modifier }) {
  return (
    <>
      <header className={`Header Header--${modifier}`}>
        {children && (
          children
        )}
      </header>
    </>
  )
}

export default Header
