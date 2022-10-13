import React, { useContext } from 'react';
import { ThemeContext } from '../../context';

import Me from '../../Assets/me.png'
import CTA from './CTA'
import './Header.css'
import HeaderSocials from './HeaderSocials'
import {AiFillDownCircle} from 'react-icons/ai'
const Header = () => {
  const theme = useContext(ThemeContext)
  const darkMode=theme.state.darkMode;
  return (
    <header>
<div className="container header__container">

  <h4 style={{color:darkMode &&  "white",}}>Hello I'm</h4>
  <h1 style={{color:darkMode &&  "white",}}>Shakir Kamal</h1>

  <h5 style={{color:darkMode &&  "rgba(255,255,255,0.6)",}} className='text-light'>Frontend Developer</h5>
  <CTA />
  <HeaderSocials />
  <div style={{backgroundColor:darkMode &&  "#4db5ff",}} className="me">
    <img   className='me-img' src={Me} alt="me" />
  </div>
  <a style={{color:darkMode &&  "#4db5ff",}} href="#contact" className='scroll__down'><AiFillDownCircle/></a>
</div>
    </header>
  )
}

export default Header