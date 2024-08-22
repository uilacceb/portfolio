import Email from '../assets/icons/email.png';
import GitHub from '../assets/icons/github.png';
import LinkedIn from '../assets/icons/linkedin.png';
import "./css/contact.css"
import { useRef } from 'react';
import emailjs from '@emailjs/browser';



const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_all7s92', 'template_umo91um', form.current, {
        publicKey: 'hEPgTva9FDL_VgTBn',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <>

      <section>

        <div className="form-container">
          <div className="contact-info">
            <h2 className='title'>Get in touch with me</h2>
            <div className='real-info'>
              <div className="contact-item">
                <img className="icon" src={Email} alt="Email Logo" />
                <a className="contact-detail" href="mailto:uilacceb@gmail.com">uilacceb@gmail.com</a>
              </div>
              <div className="contact-item">
                <img className="icon" src={LinkedIn} alt="LinkedIn Logo" />
                <a className="contact-detail" href="https://www.linkedin.com/in/uilacceb/" target="_blank" rel="noopener noreferrer">Rebecca Liu</a>
              </div>
              <div className="contact-item">
                <img className="icon" src={GitHub} alt="GitHub Logo" />
                <a className="contact-detail" href="https://github.com/uilacceb" target="_blank" rel="noopener noreferrer">Rebecca Liu</a>
              </div>
            </div>
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <div className='form-right'>
              <div className='title-div'>
                <h1 className='title'>Leave me a message!</h1>
              </div>
              <div className='message-form'>
                <div className="form-col">
                  <h5>01</h5>
                  <label className="label" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="field"
                    type="text"
                    id="form-name"
                    name="name"
                    defaultValue=""
                    required=""
                    placeholder="Your name *"
                  />
                </div>
                <div className="form-col">
                  <h5>02</h5>
                  <label className="label" htmlFor="email">
                    email
                  </label>
                  <input
                    className="field"
                    type="email"
                    id="form-email"
                    name="email"
                    defaultValue=""
                    required=""
                    placeholder="john@doe.com *"
                  />
                </div>
                <div className="form-col">
                  <h5>03</h5>
                  <label className="label" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    className="field"
                    id="form-message"
                    name="message"
                    defaultValue=""
                    required=""
                    placeholder="Write me something..."
                    cols={50}
                    rows={6}
                  />
                </div>
                <div className='btn-div'>
                  <button className='btn-send'>SEND</button>
                </div>
              </div>
            </div>
          </form>
        </div>


      </section>
    </>
  )
}

export default Contact