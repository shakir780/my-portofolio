import React, { useContext } from 'react';
import { ThemeContext } from './context';


import About from "./components/About/About";
import Contact from "./components/contact/contact";
import Experience from "./components/experience/experience";
import Footer from "./components/Footer/Footer";
import Header from "./components/header/header";
import Nav from "./components/nav/nav";
import Portfolio from "./components/portfolio/portfolio";
import Background from './Assets/bg-texture.png'

import Toggle from "./components/Toggle/Toggle"



function App() {
  const theme = useContext(ThemeContext)
  const darkMode=theme.state.darkMode;
  return (
    <div className='app' style={{backgroundColor: darkMode ? '#1f1f38' : " white ",
    color:darkMode &&  "rgb(0, 0, 0)",
    backgroundImage: `url(${Background})`,
    
    lineHeight: 1.7,
    }}>
      
     <Header />
    <Toggle />
     <Nav/>
     <About/>
     <Experience/>
    
     <Portfolio/>
    
     <Contact/>
     <Footer/>

    </div>
  );
}

export default App;
