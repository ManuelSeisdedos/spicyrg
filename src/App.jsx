import './App.css'
import Header from './components/layout/Header/Header.jsx'
import SideBar from './components/layout/SideBar/SideBar.jsx'
import About from './components/layout/About/About.jsx'
import Events from './components/layout/Events/Events.jsx'
import Footer from './components/layout/Footer/Footer.jsx'

function App () {
  return (
    <>
      <Header>
        <SideBar />
      </Header>
      <main className='Main'>
        <section className='Main-about'>
          <About />
        </section>
        <section className='Main-Events'>
          <Events />
        </section>
      </main>
      <Footer />
    </>
  )
}

export default App
