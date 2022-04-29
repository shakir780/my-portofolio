import React, { useContext } from 'react';
import { ThemeContext } from '../../context';
import './Footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'
const Footer = () => {
  const theme = useContext(ThemeContext)
  const darkMode=theme.state.darkMode;
  return (
    <footer  style={{backgroundColor:darkMode &&  "#2c2c6c",
            
          
  }} id='footer'>
      <a href="#" className='footer__logo'>Shakir kamal</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
     
        <li><a href="#porfolio">Portfolio</a></li>
     
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a h href="https://www.facebook.com/shakir.kamal.16" target="_blank"><FaFacebookF/></a> 
        <a href="https://www.instagram.com/shaks.dev/" target="_blank"> <FiInstagram/> </a>
        <a href="https://twitter.com/shakirmadridsta" target="_blank"> <IoLogoTwitter/> </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Shaks. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer