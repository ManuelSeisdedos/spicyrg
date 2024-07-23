import './Gallery'
import LinkTo from '../../core/LinkTo/LinkTo.jsx'
import List from '../../integrated/List/List.jsx'

function Gallery () {
  return (
    <>
      <div className='Gallery'>
        <LinkTo />
        <List
          isOrderedInitialization={false}
          modifire='gallery'
        >
          <LinkTo />
        </List>
      </div>
    </>
  )
}

export default Gallery
