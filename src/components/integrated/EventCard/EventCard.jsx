import './EventCard.css'
import { useState } from 'react'
import { useWindowSize } from '../../../hooks/useWindowSize.js'
import LinkTo from '../../core/LinkTo/LinkTo.jsx'
import Button from '../../core/Button/Button.jsx'

function EventCard ({ date, hour, location, ticketUrl }) {
  const { isMobile } = useWindowSize()
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <div className='EventCard'>
        <div className='EventCard-border'>
          <div className='EventCard-container'>
            <div className='EventCard-info'>
              {date && (<h3 className='EventCard-date'>{date}</h3>)}
              <ul className='EventCard-list EventCard-list--info'>
                <li className='EventCard-item EventCard-item--info'>
                  {location.adress && (
                    <p className='EventCard-adress'>
                      <span className='EventCard-place'>{location.adress.place}, </span>
                      <span className='EventCard-streetName'>{location.adress.street.name} </span>
                      <span className='EventCard-streetNumber'>{location.adress.street.number}.</span>
                    </p>
                  )}
                </li>
                <li className='EventCard-item EventCard-item--info'>
                  {hour && (
                    <p>
                      <span className='EventCard-hour'>{hour}</span>
                    </p>
                  )}
                </li>
                <li className='EventCard-item EventCard-item--info'>
                  {location && (
                    <p className='EventCard-location'>
                      <span className='EventCard-city'>{location.city}, </span>
                      <span className='EventCard-province'>{location.province}.</span>
                    </p>
                  )}
                </li>
              </ul>
            </div>
            <div className='EventCard-clicks'>
              <ul className='EventCard-list EventCard-list--clicks'>
                <li className='EventCard-item EventCard-item--clicks'>
                  {!isMobile
                    ? (
                      <Button
                        img={!isOpen ? 'src/assets/img/icons/Maps.svg' : 'src/assets/img/icons/MapsActivado.svg'}
                        handleClick={handleClick}
                        modifire='eventCardLocationBtn'
                      />
                      )
                    : (
                      <LinkTo
                        linkTo={location.googleMapsLink}
                        isBlankInitialization
                        img='src/assets/img/icons/Maps.svg'
                        modifire='eventCardLocationLink'
                      />
                      )}
                </li>
                <li className='EventCard-item EventCard-item--clicks'>
                  <LinkTo
                    linkTo={ticketUrl}
                    isBlankInitialization
                    text='TICKET'
                    modifire='eventCardTicketLink'
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
        {isMobile
          ? (<></>)
          : (
            <div className='EventCard-googleMapsLocation'>
              {location.googleMapsIframe && (
                <iframe
                  className={`EventCard-iframe ${!isOpen ? '' : 'is-open'}`}
                  src={location.googleMapsIframe}
                />
              )}
            </div>
            )}
      </div>
    </>
  )
}

export default EventCard
