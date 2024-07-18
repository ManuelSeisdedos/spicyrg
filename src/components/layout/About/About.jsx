import './About.css'
import Logo from '../../core/Logo/Logo.jsx'
import LinkTo from '../../core/LinkTo/LinkTo.jsx'

function About () {
  return (
    <>
      <div className='About'>
        <div className='About-logoAndText'>
          <Logo
            src='src\assets\img\Logo Spicy.svg'
            alt='Spicy'
            modifier='about'
          />
          <div className='About-text'>
            <p className='About-p'>
              Desde el corazón de La Plata, Spicy
              transporta a su audiencia a un viaje
              sonoro único.
            </p>
          </div>
        </div>
        <div className='About-linkToEvents'>
          <LinkTo
            linkTo=''
            isBlankInitialization={false}
            text='Próximo Evento'
            modifire='about'
          />
        </div>
      </div>
    </>
  )
}

export default About
