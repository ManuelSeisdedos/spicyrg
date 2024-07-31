import './ErrorLoadingSong.css'

function ErrorLoadingSong () {
  return (
    <>
      <div className='ErrorLoadingSong'>
        <div className='ErrorLoadingSong-songImg'>
          <div className='ErrorLoadingSong-img'>
            <h3 className='ErrorLoadingSong-errorTitle'>¡UPS!</h3>
            <span className='ErrorLoadingSong-errorMessage'> Hubo un problema al intentar cargar la canción</span>
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
