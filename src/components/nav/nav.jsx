import React, { useContext } from 'react';
import { ThemeContext } from '../../context';
import { useState } from 'react'
import './Nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'

const Nav = () => {
  const theme = useContext(ThemeContext)
  const darkMode=theme.state.darkMode;
  const [activeNav,setActiveNav]=useState('#')

  return (
    <nav>
 <a style={{color:darkMode &&  "grey",}} href="#" onClick={()=>setActiveNav('#')} className={activeNav === '#'? 'active' : ''}> <AiOutlineHome/> </a>
      <a style={{color:darkMode &&  "grey",}} href="#about" onClick={()=>setActiveNav('#about')} className={activeNav === '#about'? 'active' : ''}> <AiOutlineUser /> </a>
      <a style={{color:darkMode &&  "grey",}} href="#experience" onClick={()=>setActiveNav('#experience')} className={activeNav === '#experience'? 'active' : ''}> <BiBook/> </a>
     
      <a style={{color:darkMode &&  "grey",}} href="#contact" onClick={()=>setActiveNav('#contact')} className={activeNav === '#contact'? 'active' : ''}> <BiMessageSquareDetail/> </a>
    </nav>
  )
}

export default Nav