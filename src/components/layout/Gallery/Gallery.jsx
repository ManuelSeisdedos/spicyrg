import './Gallery.css'
import { useState } from 'react'
import { useLoadGallery } from '../../../hooks/useLoadGallery.js'
import { instagramData } from '../../../consts/instagramData.js'
import LinkTo from '../../core/LinkTo/LinkTo.jsx'
import Button from '../../core/Button/Button.jsx'
import List from '../../integrated/List/List.jsx'
import NothingToShow from '../../notifications/NothingToShow/NothingToShow.jsx'

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
            imgAlt='Icono de Instagram'
            modifire='galleryLinkToSocialMedia'
          />
        </div>
        {!gallery.length > 0
          ? (
            <NothingToShow
              message='No hay imagenes disponibles...'
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

/**

    const TOKEN = import.meta.env.VITE_INSTA_TESTER_TOKEN;
    const USER_ID = import.meta.env.VITE_INSTA_USER_ID;
    const URL = `https://graph.instagram.com/me/media?fields=media_url&access_token=${TOKEN}`;

    try {
        const data = await axios.get(URL)
        setInstaFeed(data)
    } catch (error) {
        console.log(error);
    }
    return instaFeed

 */
