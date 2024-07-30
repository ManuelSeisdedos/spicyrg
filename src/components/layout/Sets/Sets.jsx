import './Sets.css'
import { sets } from '../../../consts/sets.js'
import AudioPlayer from '../../integrated/AudioPlayer/AudioPlayer.jsx'

function Sets () {
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

export default Sets
