import React, { useContext } from "react";

import "./portfolio.css";
import { ThemeContext } from "../../context";
import IMG1 from "../../Assets/shaks-estate.png";
import IMG2 from "../../Assets/alwataniyaplast.png";
import IMG7 from "../../Assets/portofolio6.png";
import IMG8 from "../../Assets/marlian.png";
import IMG9 from "../../Assets/portfolio8.png";
import IMG10 from "../../Assets/portfolio9.png";
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
  ];

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
        {data.map(({ id, img, title, github, demo }) => {
          return (
            <article
              style={{ backgroundColor: darkMode && "#2c2c6c" }}
              key={id}
              className="portfolio__item"
            >
              <div className="portfolio__item-image">
                <img src={img} alt={title} />
              </div>
              <h3 style={{ color: darkMode && "white" }}>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  style={{
                    backgroundColor: darkMode && "#2c2c6c",
                    color: "white",
                    borderColor: darkMode && "#4db5ff",
                  }}
                  href={github}
                  className="btn btn-primary"
                  target="_blank"
                >
                  GitHub
                </a>
                <a
                  style={{
                    backgroundColor: darkMode && "#4db5ff",
                    color: darkMode && "#1f1f38",
                  }}
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
