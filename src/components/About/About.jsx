import './About.css'
import ME from '../../Assets/me-about.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import React, { useContext } from 'react';
import { ThemeContext } from '../../context';

const About = () => {
  const theme = useContext(ThemeContext)
  const darkMode=theme.state.darkMode;
  return (
    <section id='about'>
      <h5 style={{color:darkMode &&  "rgba(255,255,255,0.6)",}}>Get To Know</h5>
      <h2 style={{
     color:darkMode &&  "#4db5ff",}}>About Me</h2>
     
      <div className="container about__container">
        <div className="about__me">
          <div style={{
     backgroundColor:darkMode &&  "#2c2c6c"}} className="about__me-image">
            <img className='about-img' src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article style={{backgroundColor:darkMode &&  "#2c2c6c",
            
          
          }} className ="about__card"   >
              <FaAward  style={{color:darkMode &&  "#4db5ff",}}  className='about__icon'/>
              <h5 style={{color:darkMode &&  "white",}}>Experience</h5>
              <small style={{color:darkMode &&  "white",}}>3+ Years Working</small>
            </article>
            <article 
            style={{backgroundColor:darkMode &&  "#2c2c6c",
            
          
          }} className="about__card">
              <FiUsers  style={{color:darkMode &&  "#4db5ff",}} className='about__icon'/>
              <h5 style={{color:darkMode &&  "white",}}>Clients</h5>
              <small  style={{color:darkMode &&  "white",}}  >20+ Worldwide</small>
            </article>
            <article
            style={{backgroundColor:darkMode &&  "#2c2c6c",
              
          
          }} className="about__card">
              <VscFolderLibrary  style={{color:darkMode && "#4db5ff",}} className='about__icon'/>
              <h5 style={{color:darkMode &&  "white",}}>Projects</h5>
              <small style={{color:darkMode &&  "white",}}>20+ projects completed</small>
            </article>
          </div>
          <p  style={{color:darkMode &&  "white",}}   className='about__paragraph'> I am a Frontend Developer, lifelong learner with experience in building websites and web applications. I
 specialize in JavaScript and have professional experience working with React. I am motivated by the opportunity that software provides to positively impact the life of an individual, and the world as a whole.</p>
          <a  style={{
     backgroundColor:darkMode &&  "#4db5ff",
      color:darkMode &&  "#1f1f38",
     
      
 
  }} href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About