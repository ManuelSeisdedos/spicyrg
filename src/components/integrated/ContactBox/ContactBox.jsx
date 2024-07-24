import './ContactBox.css'
import Button from '../../core/Button/Button'

function ContactBox () {
  return (
    <>
      <div className='ContactBox' id='contact'>
        <h4 className='ContactBox-title'>CONTACTO</h4>
        <form className='ContactBox-form' action='' method='POST'>
          <div className='ContactBox-inputs'>
            <input
              className='ContactBox-input'
              type='text'
              name='name'
              id='name'
              placeholder='Nombre Completo'
              required
            />
            <input
              className='ContactBox-input'
              type='email'
              name='email'
              id='email'
              placeholder='@email.com'
              required
            />
          </div>
          <div className='ContactBox-message'>
            <textarea
              className='ContactBox-textarea'
              name='message'
              id='message'
              minLength={20}
              maxLength={340}
              placeholder='¡Déjanos tu mensaje acá!'
              required
            />
          </div>
          <div className='ContactBox-sendBtn'>
            <Button
              text='Enviar'
              modifire='contactBoxSendBtn'
            />
          </div>
        </form>
      </div>
    </>
  )
}

export default ContactBox
