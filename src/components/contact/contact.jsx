
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import React, { useRef,useContext }  from 'react';

import { ThemeContext } from '../../context';
import emailjs from 'emailjs-com'
const Contact = () => {
  const theme = useContext(ThemeContext)
  const darkMode=theme.state.darkMode;
  const form=useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_o0ki3sa', 'template_38wmogo', form.current, '_IIUNadLWY2wLEkTo')
     e.target.reset()
  };
  return (
    <section id='contact'>
      <h5 style={{color:darkMode &&  "white",}}>Get In Touch</h5>
      <h2 style={{color:darkMode &&  "#4db5ff",}}>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article style={{backgroundColor:darkMode &&  "#2c2c6c",
            
          
          }} className="contact__option">
            <MdOutlineEmail style={{color:darkMode &&  "white",}} className='contact__option-icon' />
            <h4 style={{color:darkMode &&  "white",}}>Email</h4>
            <h5 style={{color:darkMode &&  "white" ,}}>Kamalshakir@ymail.com</h5>
            <a style={{color:darkMode &&  "#4db5ff",}} href="mailto:Kamalshakir@ymail.com" target="_blank">Send a message</a>
          </article>
          <article style={{backgroundColor:darkMode &&  "#2c2c6c",
            
        
          }} className="contact__option">
            <RiMessengerLine style={{color:darkMode &&  "white",}} className='contact__option-icon' />
            <h4 style={{color:darkMode &&  "white",}}>Messenger</h4>
            <h5 style={{color:darkMode &&  "white",}}>Shakir Kamal</h5>
            <a style={{color:darkMode &&  "#4db5ff",}} href="https://www.facebook.com/shakir.kamal.16" target="_blank">Send a message</a>
          </article>
          <article style={{backgroundColor:darkMode &&  "#2c2c6c",
            
          
          }} className="contact__option">
            <BsWhatsapp style={{color:darkMode &&  "white",}} className='contact__option-icon' />
            <h4 style={{color:darkMode &&  "white",}}>Whatssap</h4>
            <h5 style={{color:darkMode &&  "white",}}>+12345678</h5>
            <a style={{color:darkMode &&  "#4db5ff",}} href="https://api.whatsapp.com/send?phone=+201127422794" target="_blank">Send a message</a>
          </article>
        </div>
        {/**End of Contact Options */}
        <form ref={form} onSubmit={sendEmail}>
          <input style={{borderColor:darkMode &&  "#4db5ff",
                     color :darkMode  &&'white',
        }} type="text" name='name'placeholder='Your Full Name' required />
          <input style={{borderColor:darkMode &&  "#4db5ff",
                 color :darkMode  &&'white',
    }} type="email" name='email'placeholder='Your Email' required />
          <textarea style={{borderColor:darkMode &&  "#4db5ff",
      color :darkMode  &&'white',
    }} name="message" rows="7" placeholder="Your Message" required></textarea>
          <button style={{backgroundColor:darkMode &&  "#4db5ff",
         color :darkMode  &&'black',
        
        }} type='submit' className='btn btn-primary'>Send Message</button>

        </form>
      </div>
    </section>
  )
}

export default Contact