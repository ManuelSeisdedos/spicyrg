import './App.css'
import { slogan } from './consts/slogan.js'
import Header from './Components/layout/Header/Header.jsx'
import SideBar from './Components/layout/SideBar/SideBar.jsx'
import Banner from './Components/layout/Banner/Banner.jsx'
import Events from './Components/layout/Events/Events.jsx'
import Footer from './Components/layout/Footer/Footer.jsx'

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
