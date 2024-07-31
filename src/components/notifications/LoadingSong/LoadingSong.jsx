import './LoadingSong.css'

function LoadingSong () {
  return (
    <>
      <div className='LoadingSong'>
        <div className='LoadingSong-songImg'>
          <div className='LoadingSong-img' />
        </div>
        <div className='LoadingSong-songInfo'>
          <div className='LoadingSong-songName' />
          <div className='LoadingSong-artistName' />
        </div>
        <div className='LoadingSong-time'>
          <div className='LoadingSong-timeSpan' />
        </div>
      </div>
    </>
  )
}

export default LoadingSong
