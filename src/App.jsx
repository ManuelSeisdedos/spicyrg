import './App.css'
import Header from './components/layout/Header/Header.jsx'
import Menu from './components/layout/Menu/Menu.jsx'
import About from './components/layout/About/About.jsx'

function App () {
  return (
    <>
      <Header>
        <Menu />
      </Header>
      <main className='Main'>
        <About />
      </main>
    </>
  )
}

export default App
