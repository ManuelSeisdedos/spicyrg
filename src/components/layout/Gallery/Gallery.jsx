import './Gallery.css'
import { useEffect, useState } from 'react'
import { instagramData } from '../../../consts/instagramData.js'
import { getInstagramPosts } from '../../../services/getInstagramPosts.js'
import LinkTo from '../../core/LinkTo/LinkTo.jsx'
import Button from '../../core/Button/Button.jsx'
import List from '../../integrated/List/List.jsx'

function Gallery () {
  const [socialMediaItem] = useState(instagramData)
  const [gallery, setGallery] = useState([])
  const [isLoadMore, setIsLoadMore] = useState(false)

  const handleClick = () => {
    setIsLoadMore(!isLoadMore)
  }

  useEffect(() => {
    getInstagramPosts().then((instagramPosts) => {
      if (!isLoadMore) {
        const newInstagramPosts = instagramPosts.slice(0, 6)
        setGallery(newInstagramPosts)
      } else {
        setGallery(instagramPosts)
      }
    })
  }, [isLoadMore])

  return (
    <>
      <div className='Gallery'>
        <h2 className='Gallery-title'>SEGUIME</h2>
        <div className='Gallery-linkToSocialMedia'>
          <LinkTo
            linkTo={socialMediaItem.linkTo}
            isBlankInitialization
            text={socialMediaItem.text}
            img={socialMediaItem.img}
            modifire='galleryLinkToSocialMedia'
          />
        </div>
        <List
          isOrderedInitialization={false}
          items={gallery}
          modifire='gallery'
        >
          <LinkTo />
        </List>
        <div className='Gallery-loadMoreBtn'>
          <Button
            text='Cargar más'
            handleClick={isLoadMore ? undefined : handleClick}
            modifire='galleryLoadMoreBtn'
            disabled={!!isLoadMore}
          />
        </div>
      </div>
    </>
  )
}

export default Gallery
