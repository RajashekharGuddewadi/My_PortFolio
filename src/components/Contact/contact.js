import React, { useRef } from 'react'
import './contact.css'
import facebookicon from '../../assets/facebook-icon.png'
import Twittwricon from '../../assets/twitter.png'
import Youtubeicon from '../../assets/youtube.png'
import Instagramicon from '../../assets/instagram.png'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_d5klkal', 'template_l8bpmim', form.current, '7KVN8oLxOYduQuCr2YXoh')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
  return (
    <div id="contactPage">
      <div className="contact">
      <h1 className="contactPageTitle">Contact Me</h1>
      <span className='contactDesc'>Please fill out the form below to discuss any work opportunities.</span>
      <form action="" className="contactForm" ref={form} onSubmit={sendEmail}>
      <input type="text" className="name"  placeholder='Your Name' name='your_name'/>
      <input type="email" className="email"  placeholder='Your Email' name='your_email'/>
      <textarea className='msg' name='message' rows='5' placeholder='Your Massage'></textarea>
      <button type='sumbit' value='send' className="submitBtn">Submit</button>
      <div className="links">
      <img src={facebookicon} alt="facebook" className="link" />
      <img src={Twittwricon} alt="twitter" className="link" />
      <img src={Youtubeicon} alt="youtube" className="link" />
      <img src={Instagramicon} alt="instagram" className="link" />
      </div>
      </form>
      
      </div>
    </div>
  )
}

export default Contact
