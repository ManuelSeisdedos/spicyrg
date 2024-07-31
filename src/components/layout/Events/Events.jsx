import './Events.css'
import List from '../../integrated/List/List.jsx'
import EventCard from '../../integrated/EventCard/EventCard.jsx'
import NothingToShow from '../../notifications/NothingToShow/NothingToShow.jsx'

function Events ({ events }) {
  return (
    <>
      <div className='Events'>
        <h2 className='Events-title'>EVENTOS</h2>
        {!events.length > 0
          ? (
            <NothingToShow
              message='No hay eventos disponibles...'
              modifire='eventsNothingToShow'
            />
            )
          : (
            <List
              isOrderedInitialization
              items={events}
              modifire='events'
            >
              <EventCard />
            </List>
            )}
      </div>
    </>
  )
}

export default Events
