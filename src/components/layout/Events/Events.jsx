import './Events.css'
import { events } from '../../../consts/events.js'
import List from '../../integrated/List/List.jsx'
import EventCard from '../../integrated/EventCard/EventCard.jsx'

function Events () {
  return (
    <>
      <div className='Events'>
        <h2 className='Events-title'>EVENTOS</h2>
        <List
          isOrderedInitialization
          items={events}
          modifire='events'
        >
          <EventCard />
        </List>
      </div>
    </>
  )
}

export default Events
