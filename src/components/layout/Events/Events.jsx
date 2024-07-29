import './Events.css'
import NothingToShow from '../../notifications/NothingToShow/NothingToShow.jsx'
import List from '../../integrated/List/List.jsx'
import EventCard from '../../integrated/EventCard/EventCard.jsx'

function Events ({ events }) {
  return (
    <>
      <div className='Events'>
        <h2 className='Events-title'>EVENTOS</h2>
        {!events.length > 0
          ? (
            <NothingToShow
              message='¡Ups! No hay eventos disponibles...'
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
