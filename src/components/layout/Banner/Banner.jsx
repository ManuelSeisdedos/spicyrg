import './Banner.css'
import banner from '../../../assets/img/principal.webp'
import spicyLogo from '../../../assets/img/spicy-logo.svg'
import LinkTo from '../../core/LinkTo/LinkTo.jsx'
import Logo from '../../core/Logo/Logo.jsx'

function Banner ({ slogan }) {
  return (
    <>
      <div className='Banner' style={{ backgroundImage: `url(${banner})` }}>
        <div className='Banner-logoAndText'>
          <Logo
            src={spicyLogo}
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
