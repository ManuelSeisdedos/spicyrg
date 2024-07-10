import './Footer.css'

function Footer ({ children, modifier }) {
  return (
    <>
      <footer className={`Footer Footer--${modifier}`}>
        {children && (
          children
        )}
      </footer>
    </>
  )
}

export default Footer
