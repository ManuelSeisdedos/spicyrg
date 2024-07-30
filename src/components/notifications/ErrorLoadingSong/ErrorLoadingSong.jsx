import './ErrorLoadingSong.css'

function ErrorLoadingSong () {
  return (
    <>
      <div className='ErrorLoadingSong'>
        <div className='ErrorLoadingSong-songImg'>
          <div className='ErrorLoadingSong-img'>
            <span className='ErrorLoadingSong-errorMessage'>¡Ups! Hubo un error al intentar cargar la canción.</span>
          </div>
        </div>
        <div className='ErrorLoadingSong-songInfo'>
          <div className='ErrorLoadingSong-songName' />
          <div className='ErrorLoadingSong-artistName' />
        </div>
        <div className='ErrorLoadingSong-time'>
          <div className='ErrorLoadingSong-timeSpan' />
        </div>
      </div>
    </>
  )
}

export default ErrorLoadingSong
