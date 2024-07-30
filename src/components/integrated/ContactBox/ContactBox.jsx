import './ContactBox.css'
import Button from '../../core/Button/Button'
import ReCAPTCHA from 'react-google-recaptcha'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'

function ContactBox () {

  const SITEKEY = import.meta.env.VITE_SITEKEY_RECAPTCHA
  const EJS_SERV_ID = import.meta.env.VITE_EJS_SERV_ID
  const EJS_TEMP_ID = import.meta.env.VITE_EJS_TEMP_ID
  const EJS_PUBLIC_KEY = import.meta.env.VITE_EJS_PUBLIC_KEY
  const form = useRef()
  
  const handleChange = (e) => {
    console.log(e);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    emailjs.sendForm(EJS_SERV_ID, EJS_TEMP_ID, form.current, {
        publicKey: EJS_PUBLIC_KEY,
      })
      .then(
        () => {
          console.log('SUCCESS!', form.current);
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <>
      <div className='ContactBox' id='contact'>
        <h4 className='ContactBox-title'>CONTACTO</h4>
        <form ref={form} className='ContactBox-form' action='' method='POST' onSubmit={handleSubmit}>
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
          <div>
            <ReCAPTCHA sitekey={SITEKEY} onChange={handleChange} theme='dark'/>
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
