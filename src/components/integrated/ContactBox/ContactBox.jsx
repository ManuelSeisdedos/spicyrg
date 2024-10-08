import './ContactBox.css'
// import { useRef, useState } from 'react'
// import ReCAPTCHA from 'react-google-recaptcha'
// import emailjs from '@emailjs/browser'
import Button from '../../core/Button/Button'

function ContactBox () {
  // const SITEKEY = import.meta.env.VITE_SITEKEY_RECAPTCHA
  // const EJS_SERV_ID = import.meta.env.VITE_EJS_SERV_ID
  // const EJS_TEMP_ID = import.meta.env.VITE_EJS_TEMP_ID
  // const EJS_PUBLIC_KEY = import.meta.env.VITE_EJS_PUBLIC_KEY
  // const form = useRef()
  // const [isCaptchaVerified, setIsCaptchaVerified] = useState(false)
  // const [isSucces, setIsSucces] = useState()

  // const handleChange = (e) => {
  //   e === null ? setIsCaptchaVerified(false) : setIsCaptchaVerified(true)
  // }

  // const handleSubmit = (e) => {
  //   e.preventDefault()

  //   if (isCaptchaVerified) {
  //     emailjs.sendForm(EJS_SERV_ID, EJS_TEMP_ID, form.current, {
  //       publicKey: EJS_PUBLIC_KEY
  //     })
  //       .then(
  //         () => {
  //           console.log('SUCCESS!', form.current)
  //           setIsSucces(true)
  //         },
  //         (error) => {
  //           console.log('FAILED...', error.text)
  //           setIsSucces(false)
  //         }
  //       )
  //   }
  // }

  return (
    <>
      <section className='ContactBox' id='contact'>
        <h3 className='ContactBox-title'>CONTACTO</h3>
        {/* ref={form} onSubmit={handleSubmit} */}
        <form className='ContactBox-form' action='' method='POST'>
          <fieldset className='ContactBox-inputs'>
            <label aria-label='Nombre Completo'>
              <input
                className='ContactBox-input'
                type='text'
                name='name'
                id='name'
                placeholder='Nombre Completo'
                autoComplete='off'
                readOnly
                required
              />
            </label>
            <label aria-label='@email.com'>
              <input
                className='ContactBox-input'
                type='email'
                name='email'
                id='email'
                placeholder='@email.com'
                autoComplete='off'
                readOnly
                required
              />
            </label>
          </fieldset>
          <fieldset className='ContactBox-message'>
            <textarea
              className='ContactBox-textarea'
              name='message'
              id='message'
              minLength={20}
              maxLength={340}
              placeholder='¡Déjanos tu mensaje acá!'
              readOnly
              required
            />
          </fieldset>
          {/* <div className='ContactBox-reCaptcha'>
            <ReCAPTCHA sitekey={SITEKEY} onChange={handleChange} theme='dark' />
          </div> */}
          {/* <div className='ContactBox-notificationBox'>
            {!isCaptchaVerified
              ? (<span className='ContactBox-notification ContactBox-notification--reCaptcha'>¡Realiza la Verificación ReCaptcha para enviar la consulta!</span>)
              : !isSucces
                  ? (<span className='ContactBox-notification ContactBox-notification--error'>¡Algo ha fallado al intentar enviar la consulta!</span>)
                  : (<span className='ContactBox-notification ContactBox-notification--succes'>¡Consulta enviada con éxito!</span>)}
          </div> */}
          <small className='ContactBox-small'>El formulario de contacto estará deshabilitado temporalmente, disculpamos las molestias.</small>
          <menu className='ContactBox-sendBtn'>
            <Button
              text='Enviar'
              modifire='contactBoxSendBtn'
              disabled
            />
          </menu>
        </form>
      </section>
    </>
  )
}

export default ContactBox
