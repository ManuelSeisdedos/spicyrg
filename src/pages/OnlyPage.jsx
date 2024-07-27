import { slogan } from '../consts/slogan.js'
import { events } from '../consts/events.js'
import Header from '../components/layout/Header/Header.jsx'
import Banner from '../components/layout/Banner/Banner.jsx'
import Sets from '../components/layout/Sets/Sets.jsx'
import Events from '../components/layout/Events/Events.jsx'
import Gallery from '../components/layout/Gallery/Gallery.jsx'
import Footer from '../components/layout/Footer/Footer.jsx'

function OnlyPage () {
  return (
    <>
      <Header />
      <main className='Main'>
        <section className='Main-banner' id='banner'>
          <Banner
            slogan={slogan}
          />
        </section>
        <section className='Main-Sets' id='sets'>
          <Sets />
        </section>
        <section className='Main-events' id='events'>
          <Events
            events={events}
          />
        </section>
        <section className='Main-gallery' id='gallery'>
          <Gallery />
        </section>
      </main>
      <Footer />
    </>
  )
}

export default OnlyPage
