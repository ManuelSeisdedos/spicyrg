import './Sets.css'
import { sets } from '../../../consts/sets.js'
import AudioPlayer from '../../integrated/AudioPlayer/AudioPlayer.jsx'

function Gallery () {
  return (
    <>
      <div className='Sets'>
        <AudioPlayer
          songs={sets}
        />
      </div>
    </>
  )
}

export default Gallery
