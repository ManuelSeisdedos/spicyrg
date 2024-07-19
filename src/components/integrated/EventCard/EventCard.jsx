import './EventCard.css'
import { useState } from 'react'
import LinkTo from '../../core/LinkTo/LinkTo.jsx'
import Button from '../../core/Button/Button.jsx'

function EventCard ({ id, date, hour, location, ticketUrl }) {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <div className='EventCard'>
        <div className='EventCard-container'>
          <div className='EventCard-info'>
            <h3 className='EventCard-title'><span className=''>{date}</span></h3>
            <ul className='EventCard-list EventCard-list--info'>
              <li className='EventCard-item EventCard-item--info'>
                <span className='EventCard-place'>{location.adress.place}, </span>
                <span className='EventCard-street'>{location.adress.street.name} {location.adress.street.number}.</span>
              </li>
              <li className='EventCard-item EventCard-item--info'>
                <span className='EventCard-hour'>{hour}</span>
              </li>
              <li className='EventCard-item EventCard-item--info'>
                <span className='EventCard-city'>{location.city}, </span>
                <span className='EventCard-province'>{location.province}.</span>
              </li>
            </ul>
          </div>
          <div className='EventCard-clicks'>
            <ul className='EventCard-list EventCard-list--clicks'>
              <li className='EventCard-item EventCard-item--clicks'>
                <Button
                  svg={
                  !isOpen
                    ? 'src/assets/img/icons/Maps.svg'
                    : 'src/assets/img/icons/MapsActivado.svg'
                }
                  handleClick={handleClick}
                  modifire='eventCardLocationBtn'
                />
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
        <div className={`EventCard-googleMapsLocation ${!isOpen ? '' : 'is-open'}`}>
          <details open className='EventCard-details'>
            <summary className='EventCard-summary'>
              <iframe
                className={`EventCard-iframe ${!isOpen ? '' : 'is-open'}`}
                src={location.googleMapsUrl}
              />
            </summary>
          </details>
        </div>
      </div>
    </>
  )
}

export default EventCard
