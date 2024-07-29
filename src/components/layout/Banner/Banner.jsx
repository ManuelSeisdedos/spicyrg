import './Banner.css'
import Logo from '../../core/Logo/Logo.jsx'
import LinkTo from '../../core/LinkTo/LinkTo.jsx'

function Banner ({ slogan }) {
  return (
    <>
      <div className='Banner'>
        <div className='Banner-logoAndText'>
          <Logo
            src='src\assets\img\spicy-logo.svg'
            alt='Spicy'
            modifire='banner'
          />
          <div className='Banner-text'>
            {slogan && (
              <p className='Banner-p'>
                {slogan}
              </p>
            )}
          </div>
        </div>
        <div className='Banner-linkToEvents'>
          <LinkTo
            linkTo='#events'
            isBlankInitialization={false}
            text='Próximo Evento'
            modifire='bannerLinkToEvents'
          />
        </div>
      </div>
    </>
  )
}

export default Banner
