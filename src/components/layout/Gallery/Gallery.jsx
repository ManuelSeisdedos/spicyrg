import './Gallery.css'
import { useState } from 'react'
import { instagramPosts } from '../../../consts/instagramPosts.js'
import { instagramData } from '../../../consts/instagramData.js'
import LinkTo from '../../core/LinkTo/LinkTo.jsx'
import List from '../../integrated/List/List.jsx'

function Gallery () {
  const [socialMediaItem] = useState(instagramData)

  return (
    <>
      <div className='Gallery'>
        <h2 className='Gallery-title'>SEGUIME</h2>
        <div className='Gallery-linkTo'>
          <LinkTo
            linkTo={socialMediaItem.linkTo}
            isBlankInitialization
            text='spicy.rg'
            img={socialMediaItem.img}
            modifire='galleryLinkTo'
          />
        </div>
        <List
          isOrderedInitialization={false}
          items={instagramPosts}
          modifire='gallery'
        >
          <LinkTo />
        </List>
      </div>
    </>
  )
}

export default Gallery
