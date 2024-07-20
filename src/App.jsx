import './App.css'
import { slogan } from './consts/slogan.js'
import Header from './components/layout/Header/Header.jsx'
import SideBar from './components/layout/SideBar/SideBar.jsx'
import Banner from './components/layout/Banner/Banner.jsx'
import Events from './components/layout/Events/Events.jsx'
import Footer from './components/layout/Footer/Footer.jsx'

function App () {
  return (
    <>
      <Header>
        <SideBar />
      </Header>
      <main className='Main'>
        <section className='Main-banner'>
          <Banner
            slogan={slogan}
          />
        </section>
        <section className='Main-events'>
          <Events />
        </section>
      </main>
      <Footer />
    </>
  )
}

export default App
