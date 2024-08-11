import './Footer.css'
import { socialMediaItems } from '../../../consts/socialMediaItems.js'
import LinkTo from '../../core/LinkTo/LinkTo.jsx'
import List from '../../integrated/List/List.jsx'
import ContactBox from '../../integrated/ContactBox/ContactBox.jsx'

function Footer () {
  return (
    <>
      <footer className='Footer'>
        <div className='Footer-socialMedia'>
          {
            socialMediaItems && (
              <List
                isOrderedInitialization={false}
                items={socialMediaItems}
                modifire='footerSocialMedia'
              >
                <LinkTo />
              </List>
            )
          }
        </div>
        {/* <ContactBox /> */}
      </footer>
    </>
  )
}

export default Footer
