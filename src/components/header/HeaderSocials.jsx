
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'
import React, { useContext } from 'react';
import { ThemeContext } from '../../context';

const HeaderSocials = () => {
  const theme = useContext(ThemeContext)
  const darkMode=theme.state.darkMode;
  return (
    <div  className='header__socials'>
        <a style={{color:darkMode &&  "#4db5ff",}} href="https://www.linkedin.com/in/shakir-kamal/" target="_blank"><BsLinkedin/></a>
        <a style={{color:darkMode &&  "#4db5ff",}} href="https://github.com/shakir780" target="_blank"><FaGithub /> </a>
        <a style={{color:darkMode &&  "#4db5ff",}} href="https://twitter.com/shakirmadridsta" target="_blank"><BsTwitter /> </a>
        <div style={{backgroundColor:darkMode &&  "#4db5ff",}} className='border'></div>
    </div>
  
  )
}

export default HeaderSocials