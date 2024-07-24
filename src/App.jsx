import './App.css'
import { slogan } from './consts/slogan.js'
import Header from './components/layout/Header/Header.jsx'
import SideBar from './components/layout/SideBar/SideBar.jsx'
import Banner from './components/layout/Banner/Banner.jsx'
import Sets from './components/layout/Sets/Sets.jsx'
import Events from './components/layout/Events/Events.jsx'
import Gallery from './components/layout/Gallery/Gallery.jsx'
import Footer from './components/layout/Footer/Footer.jsx'

function App () {
  return (
    <>
      <Header>
        <SideBar />
      </Header>
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
          <Events />
        </section>
        <section className='Main-gallery' id='gallery'>
          <Gallery />
        </section>
      </main>
      <Footer />
    </>
  )
}

export default App
