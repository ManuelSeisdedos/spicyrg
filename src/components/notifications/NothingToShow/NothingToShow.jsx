import './NothingToShow.css'

function NothingToShow ({ message, modifire }) {
  return (
    <>
      <div className={`NothingToShow NothingToShow--${modifire}`}>
        {message && (
          <p className={`NothingToShow-message NothingToShow-message--${modifire}`}>{message}</p>
        )}
      </div>
    </>
  )
}

export default NothingToShow
