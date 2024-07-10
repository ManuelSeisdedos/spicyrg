import './App.css'
import Nav from './components/Nav/Nav.jsx'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faGit } from '@fortawesome/free-brands-svg-icons'

function App () {
  const itemsNav = [
    { linkTo: 'https://www.google.com/', text: 'google', icon: faHome, modifier: 'nav' },
    { linkTo: 'https://www.github.com/', text: 'git', icon: faGit, modifier: 'nav' }
  ]
  return (
    <>
      <Nav
        modifire='header'
        items={itemsNav}
      />
    </>
  )
}

export default App
