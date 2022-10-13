import React, { useContext } from 'react';
import { ThemeContext } from '../../context';
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
const Experience = () => {
  const theme = useContext(ThemeContext)
  const darkMode=theme.state.darkMode;
  return (
    <section id='experience'>
      <h5  style={{color:darkMode &&  "white",}} >What Skills I Have</h5>
      <h2 style={{
     color:darkMode &&  "#4db5ff",}} >My Experience</h2>
      <div className="container experience__container">
        <div    style={{backgroundColor:darkMode &&  "#2c2c6c",
            
          
          }} className="experice__frontend">
          <h3 style={{color:darkMode &&  "white",}}>Frontend Developement</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill style={{color:darkMode &&  "#4db5ff",}} className='experience__details-icon' />
              <div>
              <h4 style={{color:darkMode &&  "white",}}>HTML</h4>
              <small style={{color:darkMode &&  "white",}} className='text-light'>Experienced</small>
              </div>
              
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill style={{color:darkMode &&  "#4db5ff",}} className='experience__details-icon' />
               <div>
               <h4 style={{color:darkMode &&  "white",}}>CSS</h4>
              <small style={{color:darkMode &&  "white",}} className='text-light'>Intermediate</small>
               </div>
            
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill style={{color:darkMode &&  "#4db5ff",}} className='experience__details-icon' />
               <div>
               <h4 style={{color:darkMode &&  "white",}}>Bootstrap</h4>
              <small style={{color:darkMode &&  "white",}} className='text-light'>Intermediate</small>
               </div>
            
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill style={{color:darkMode &&  "#4db5ff",}} className='experience__details-icon' />
              <div>
              <h4 style={{color:darkMode &&  "white",}}>JavaScript</h4>
              <small style={{color:darkMode &&  "white",}} className='text-light'>Experienced</small>
              </div>
           
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill style={{color:darkMode &&  "#4db5ff",}} className='experience__details-icon' />
              <div>
              <h4 style={{color:darkMode &&  "white",}}>TailWind</h4>
              <small style={{color:darkMode &&  "white",}} className='text-light'>Experienced</small>
              </div>
             
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill style={{color:darkMode &&  "#4db5ff",}} className='experience__details-icon' />
              <div>
              <h4 style={{color:darkMode &&  "white",}}>React</h4>
              <small style={{color:darkMode &&  "white",}} className='text-light'>Experienced</small>
              </div>
            
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill style={{color:darkMode &&  "#4db5ff",}} className='experience__details-icon' />
              <div>
              <h4 style={{color:darkMode &&  "white",}}>Next js</h4>
              <small style={{color:darkMode &&  "white",}} className='text-light'>Experienced</small>
              </div>
            
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill style={{color:darkMode &&  "#4db5ff",}} className='experience__details-icon' />
              <div>
              <h4 style={{color:darkMode &&  "white",}}>Redux</h4>
              <small style={{color:darkMode &&  "white",}} className='text-light'>Experienced</small>
              </div>
            
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill style={{color:darkMode &&  "#4db5ff",}} className='experience__details-icon' />
              <div>
              <h4 style={{color:darkMode &&  "white",}}>Material UI</h4>
              <small style={{color:darkMode &&  "white",}} className='text-light'>Experienced</small>
              </div>
            
            </article>
          </div>
        </div>
        {/**End of Frontend */}
       
      </div>
    </section>

  )
}

export default Experience