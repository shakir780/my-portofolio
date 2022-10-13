import React,{ useContext } from 'react'

import './portfolio.css'
import { ThemeContext } from '../../context';
import IMG1 from '../../Assets/portfolio1.png'
import IMG2 from '../../Assets/portfolio2.png'
import IMG3 from '../../Assets/portfolio3.jpg'
import IMG4 from '../../Assets/portfolio4.jpg'
import IMG5 from '../../Assets/portfolio5.png'
import IMG6 from '../../Assets/portfolio6.jpg'
import IMG7 from '../../Assets/portofolio6.png'
import IMG8 from '../../Assets/portfolio7.png'
import IMG9 from '../../Assets/portfolio8.png'
const Portfolio = () => {
  const theme = useContext(ThemeContext)
  const darkMode=theme.state.darkMode;
  

   const data = [
    {
      id: 1,
      img: IMG8,
      title:"Marlian Clothing(E-commerce)",
      github:"https://github.com/shakir780/Marlian-Clothing",
      demo: "https://marlian-clothing.netlify.app/",
    },
    {
      id: 2,
      img: IMG1,
      title:"Food Recipe",
      github:"https://github.com/shakir780/Shaks-Recipe-food-recipe-",
      demo: "https://shaks-food-recipe.netlify.app/",
    },
    {
      id: 3,
      img: IMG2,
      title:"Weather App",
      github:"https://github.com/shakir780/Weather-App-Vanilla-js-",
      demo: "https://shaks-weather-app.netlify.app/",
    },
    // {
    //   id: 4,
    //   img: IMG4,
    //   title:"Maintaining tasks",
    //   github:"https://github",
    //   demo: "http://lama.dev",
    // },
    // {
    //   id: 5,
    //   img: IMG5,
    //   title:"charts templates",
    //   github:"https://github",
    //   demo: "http://lama.dev",
    // },
    { id: 6,
      img: IMG7,
      title:"Affinité Restaurant",
      github:"https://github.com/shakir780/Affinite-Restaurant",
      demo: "https://affinite-restaurant.netlify.app/",
    },
    { id: 7,
      img: IMG9,
      title:"Flex-gym",
      github:"https://github.com/shakir780/Affinite-Restaurant",
      demo: "https://github.com/shakir780/flex-gym",
    },
    
  ];

  return (
    <section id='portfolio'>
      <h5 style={{color:darkMode &&  "white",}}>My Recent Work</h5>
      <h2 style={{
     color:darkMode &&  "#4db5ff",}} >Portfolio</h2>

<div  className="container portfolio__container">
  {
    data.map(({id,img,title,github,demo})=>{
      
      return(
      <article   style={{backgroundColor:darkMode &&  "#2c2c6c",
            
          
    }} key={id} className="portfolio__item">
  <div className="portfolio__item-image">
    <img src={img} alt={title} />
  </div>
    <h3 style={{color:darkMode &&  "white",}}>{title}</h3>
    <div className="portfolio__item-cta">
    <a   style={{backgroundColor:darkMode &&  "#2c2c6c",
            color:'white',
            borderColor: darkMode && "#4db5ff",
          }} href={github} className='btn btn-primary' target='_blank'>GitHub</a>
    <a   style={{backgroundColor:darkMode &&  "#4db5ff",
      color:darkMode &&  "#1f1f38",
          
          }} href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
    </div>
   
 
  </article>
  
    )})
    
  }
</div>

    </section>
  )
}

export default Portfolio