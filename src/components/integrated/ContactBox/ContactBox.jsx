import './ContactBox.css'
import Button from '../../core/Button/Button'
import ReCAPTCHA from 'react-google-recaptcha'

function ContactBox () {

  const SITEKEY = import.meta.env.VITE_SITEKEY_RECAPTCHA
  
  const handleChange = (e) => {
    console.log(e);
  }

  return (
    <>
      <div className='ContactBox'>
        <h4 className='ContactBox-title'>CONTACTO</h4>
        <form className='ContactBox-form' action='' method='POST' onSubmit={"handleSubmit"}>
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
          <ReCAPTCHA sitekey={SITEKEY} onChange={handleChange} theme='dark'/>
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
