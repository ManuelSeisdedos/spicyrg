import './Gallery.css'
import { useState } from 'react'
import { useLoadGallery } from '../../../hooks/useLoadGallery.js'
import { instagramData } from '../../../consts/instagramData.js'
import LinkTo from '../../core/LinkTo/LinkTo.jsx'
import Button from '../../core/Button/Button.jsx'
import NothingToShow from '../../core/NothingToShow/NothingToShow.jsx'
import List from '../../integrated/List/List.jsx'

function Gallery () {
  const [socialMediaItem] = useState(instagramData)
  const { gallery, isMoreThenSix, isLoadMore, handleClick } = useLoadGallery()

  return (
    <>
      <div className='Gallery'>
        <h2 className='Gallery-title'>GALERIA</h2>
        <div className='Gallery-linkToSocialMedia'>
          <LinkTo
            linkTo={socialMediaItem.linkTo}
            isBlankInitialization
            text={socialMediaItem.text}
            img={socialMediaItem.img}
            modifire='galleryLinkToSocialMedia'
          />
        </div>
        {!gallery.length > 0
          ? (
            <NothingToShow
              message='¡Ups! No hay imagenes disponibles...'
              modifire='galleryNothingToShow'
            />
            )
          : (
            <>
              <List
                isOrderedInitialization={false}
                items={gallery}
                modifire='gallery'
              >
                <LinkTo />
              </List>
              {isMoreThenSix
                ? (
                  <div className='Gallery-loadMoreBtn'>
                    <Button
                      text={isLoadMore ? 'Cargar menos' : 'Cargar más'}
                      handleClick={handleClick}
                      modifire='galleryLoadMoreBtn'
                    />
                  </div>
                  )
                : (<></>)}
            </>
            )}

      </div>
    </>
  )
}

export default Gallery
