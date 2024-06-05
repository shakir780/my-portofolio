import React, { useContext, useState } from "react";
import { ThemeContext } from "../../context";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const SkillItem = ({ skill, level, darkMode }) => (
  <article className="experience__details">
    <BsPatchCheckFill
      style={{ color: darkMode && "#4db5ff" }}
      className="experience__details-icon"
    />
    <div>
      <h4 style={{ color: darkMode && "white" }}>{skill}</h4>
      <small style={{ color: darkMode && "white" }} className="text-light">
        {level}
      </small>
    </div>
  </article>
);
const Experience = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const [hovered, setHovered] = useState(false);
  const [hoveredFront, setHoverFront] = useState(false);

  const itemStyle = {
    backgroundColor: darkMode
      ? hovered
        ? "transparent"
        : "#2c2c6c"
      : hovered
      ? "transparent"
      : "#47474b",
    color: darkMode ? "white" : "black",
    borderRadius: "2rem",
    border: darkMode
      ? hovered
        ? "1px solid white"
        : "1px solid transparent"
      : hovered
      ? "1px solid black"
      : "1px solid transparent",
  };
  const FrontitemStyle = {
    backgroundColor: darkMode
      ? hoveredFront
        ? "transparent"
        : "#2c2c6c"
      : hoveredFront
      ? "transparent"
      : "#47474b",
    color: darkMode ? "white" : "black",
    borderRadius: "2rem",
    border: darkMode
      ? hoveredFront
        ? "1px solid white"
        : "1px solid transparent"
      : hoveredFront
      ? "1px solid black"
      : "1px solid transparent",
  };

  return (
    <section id="experience">
      <h5 style={{ color: darkMode && "white" }}>What Skills I Have</h5>
      <h2
        style={{
          color: darkMode && "#4db5ff",
        }}
      >
        My Experience
      </h2>
      <div className="container experience__container">
        <div
          style={itemStyle}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="experice__frontend"
        >
          <h3 style={{ color: darkMode && "white" }}>Backend Development</h3>
          <div className="experience__content">
            <SkillItem skill="Node" level="Intermediate" darkMode={darkMode} />
            <SkillItem
              skill="Express Js"
              level="Intermediate"
              darkMode={darkMode}
            />
            <SkillItem
              skill="MongoDB"
              level="Intermediate"
              darkMode={darkMode}
            />
            <SkillItem
              skill="Mongoose"
              level="Intermediate"
              darkMode={darkMode}
            />
          </div>
        </div>
        <div
          style={FrontitemStyle}
          onMouseEnter={() => setHoverFront(true)}
          onMouseLeave={() => setHoverFront(false)}
          className="experice__frontend"
        >
          <h3 style={{ color: darkMode && "white" }}>Frontend Development</h3>
          <div className="experience__content">
            <SkillItem skill="HTML" level="Experienced" darkMode={darkMode} />
            <SkillItem skill="CSS" level="Intermediate" darkMode={darkMode} />
            <SkillItem
              skill="Bootstrap"
              level="Intermediate"
              darkMode={darkMode}
            />
            <SkillItem
              skill="JavaScript"
              level="Experienced"
              darkMode={darkMode}
            />
            <SkillItem
              skill="TailWind"
              level="Experienced"
              darkMode={darkMode}
            />
            <SkillItem skill="React" level="Experienced" darkMode={darkMode} />
            <SkillItem
              skill="Next.js"
              level="Experienced"
              darkMode={darkMode}
            />
            <SkillItem skill="Redux" level="Experienced" darkMode={darkMode} />
            <SkillItem
              skill="Material UI"
              level="Experienced"
              darkMode={darkMode}
            />
          </div>
        </div>

        {/**End of Frontend */}
      </div>
    </section>
  );
};

export default Experience;
