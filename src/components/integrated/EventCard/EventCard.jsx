import './EventCard.css'
import { useState } from 'react'
import LinkTo from '../../core/LinkTo/LinkTo.jsx'
import Button from '../../core/Button/Button.jsx'

function EventCard ({ date, hour, location, ticketUrl }) {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <div className='EventCard' onBlur={!isOpen ? undefined : handleClick}>
        <div className='EventCard-container'>
          <div className='EventCard-info'>
            <h3 className='EventCard-date'><span className=''>{date}</span></h3>
            <ul className='EventCard-list EventCard-list--info'>
              <li className='EventCard-item EventCard-item--info'>
                <p className='EventCard-adress'>
                  <span className='EventCard-place'>{location.adress.place}, </span>
                  <span className='EventCard-streetName'>{location.adress.street.name} </span>
                  <span className='EventCard-streetNumber'>{location.adress.street.number}.</span>
                </p>
              </li>
              <li className='EventCard-item EventCard-item--info'>
                <p>
                  <span className='EventCard-hour'>{hour}</span>
                </p>
              </li>
              <li className='EventCard-item EventCard-item--info'>
                <p className='EventCard-location'>
                  <span className='EventCard-city'>{location.city}, </span>
                  <span className='EventCard-province'>{location.province}.</span>
                </p>
              </li>
            </ul>
          </div>
          <div className='EventCard-clicks'>
            <ul className='EventCard-list EventCard-list--clicks'>
              <li className='EventCard-item EventCard-item--clicks'>
                <Button
                  img={
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
        <div className='EventCard-googleMapsLocation'>
          <iframe
            className={`EventCard-iframe ${!isOpen ? '' : 'is-open'}`}
            src={location.googleMapsUrl}
          />
        </div>
      </div>
    </>
  )
}

export default EventCard
