import React, { useContext } from "react";

import "./portfolio.css";
import { ThemeContext } from "../../context";
import IMG1 from "../../Assets/shaks-estate.png";
import IMG2 from "../../Assets/alwataniyaplast.png";
import IMG7 from "../../Assets/portofolio6.png";
import IMG8 from "../../Assets/marlian.png";
import IMG9 from "../../Assets/portfolio8.png";
import IMG10 from "../../Assets/portfolio9.png";
import IMG11 from "../../Assets/TowImg.png";
import IMG12 from "../../Assets/washville.png";
import { useState } from "react";
const PortfolioItem = ({
  darkMode,
  item,
  isHovered,
  handleMouseEnter,
  handleMouseLeave,
}) => {
  const { id, img, title, github, demo } = item;

  const styles = {
    backgroundColor: darkMode
      ? isHovered
        ? "transparent"
        : "#2c2c6c"
      : isHovered
      ? "transparent"
      : "#47474b",
    borderColor: darkMode
      ? isHovered
        ? "white"
        : "transparent"
      : isHovered
      ? "black"
      : "darkgray",
    color: darkMode ? "white" : "black",
  };

  const buttonStyle = {
    backgroundColor: darkMode ? "#4db5ff" : "#47474b",
    color: darkMode ? "#1f1f38" : "white",
  };

  const linkStyle = {
    backgroundColor: darkMode ? "#4db5ff" : "#47474b",
    color: darkMode ? "#1f1f38" : "white",
  };

  return (
    <article
      style={styles}
      onMouseEnter={() => handleMouseEnter(id)}
      onMouseLeave={handleMouseLeave}
      className="portfolio__item"
      key={id}
    >
      <div className="portfolio__item-image">
        <img src={img} alt={title} />
      </div>
      <h3 style={{ color: darkMode ? "white" : "black" }}>{title}</h3>
      <div className="portfolio__item-cta">
        <a
          style={buttonStyle}
          href={github}
          className="btn btn-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          style={linkStyle}
          href={demo}
          className="btn btn-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Live Demo
        </a>
      </div>
    </article>
  );
};

const Portfolio = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const data = [
    {
      id: 1,
      img: IMG8,
      title: "Marlian Clothing(E-commerce)",
      github: "https://github.com/shakir780/Marlian-Remake-",
      demo: "https://marlian-clothing.onrender.com",
    },
    {
      id: 2,
      img: IMG1,
      title: "Shaks Estate",
      github: "https://github.com/shakir780/Shaks-Estate",
      demo: "https://shaks-estate.onrender.com/",
    },
    {
      id: 3,
      img: IMG2,
      title: "Alwataniya Plast",
      github: "https://github.com/Brandimic0/watanya-website",
      demo: "https://alwataniaplast.com/home",
    },

    {
      id: 6,
      img: IMG7,
      title: "Affinité Restaurant",
      github: "https://github.com/shakir780/Affinite-Restaurant",
      demo: "https://affinite-restaurant.netlify.app/",
    },
    {
      id: 7,
      img: IMG9,
      title: "Flex-gym",
      github: "https://github.com/shakir780/flex-gym",
      demo: "https://flex-gym-olive.vercel.app/",
    },
    {
      id: 8,
      img: IMG10,
      title: "Salesso-Dashboard",
      github: "https://github.com/shakir780/PersonalDashboard",
      demo: "https://salesso-dashboard.vercel.app/",
    },
    {
      id: 9,
      img: IMG11,
      title: "Speedy Tow",
      github: "https://github.com/shakir780/towingCompany",
      demo: "https://speedy-tow.vercel.app/",
    },
    {
      id: 10,
      img: IMG12,
      title: "WashVille",
      github: "https://github.com/shakir780/washville",
      demo: "https://washvillee.vercel.app/",
    },
  ];

  const [hoveredItemId, setHoveredItemId] = useState(null);

  const handleMouseEnter = (id) => {
    setHoveredItemId(id);
  };

  const handleMouseLeave = () => {
    setHoveredItemId(null);
  };
  return (
    <section id="portfolio">
      <h5 style={{ color: darkMode && "white" }}>My Recent Work</h5>
      <h2
        style={{
          color: darkMode && "#4db5ff",
        }}
      >
        Portfolio
      </h2>

      <div className="container portfolio__container">
        {data.map((item) => (
          <PortfolioItem
            key={item.id}
            darkMode={darkMode}
            item={item}
            isHovered={hoveredItemId === item.id}
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
