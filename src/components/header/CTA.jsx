import CV from "../../Assets/Shakir Resume (3).pdf";
import React, { useContext } from "react";
import { ThemeContext } from "../../context";

const CTA = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="cta">
      <a
        style={{
          color: darkMode && "#4db5ff",
          borderColor: darkMode && "#4db5ff",
        }}
        href={CV}
        download
        className="btn"
      >
        Download Cv
      </a>
      <a
        style={{
          backgroundColor: darkMode && "#4db5ff",
          color: darkMode && "#1f1f38",
        }}
        href="#contact"
        className="btn btn-primary"
      >
        Let's talk
      </a>
    </div>
  );
};

export default CTA;
