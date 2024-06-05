import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import React, { useRef, useContext } from "react";

import { ThemeContext } from "../../context";
import emailjs from "emailjs-com";
import { useState } from "react";

const ContactOption = ({
  darkMode,
  index,
  hoveredIndex,
  setHoveredIndex,
  icon: Icon,
  title,
  subtitle,
  link,
  linkText,
}) => {
  const handleMouseEnter = () => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const styles = {
    backgroundColor: darkMode
      ? hoveredIndex === index
        ? "transparent"
        : "#2c2c6c"
      : hoveredIndex === index
      ? "transparent"
      : "#47474b",
    borderColor: darkMode
      ? hoveredIndex === index
        ? "white"
        : "transparent"
      : hoveredIndex === index
      ? "black"
      : "darkgray",
    color: darkMode ? "white" : "black",
  };

  return (
    <article
      style={styles}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="contact__option"
    >
      <Icon
        style={{ color: darkMode ? "white" : "black" }}
        className="contact__option-icon"
      />
      <h4 style={{ color: darkMode ? "white" : "black" }}>{title}</h4>
      <h5 style={{ color: darkMode ? "white" : "black" }}>{subtitle}</h5>
      <a
        style={{ color: darkMode ? "#4db5ff" : "black" }}
        href={link}
        target="_blank"
        rel="noreferrer"
      >
        {linkText}
      </a>
    </article>
  );
};
const Contact = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_o0ki3sa",
      "template_38wmogo",
      form.current,
      "_IIUNadLWY2wLEkTo"
    );
    e.target.reset();
  };

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const contactOptions = [
    {
      icon: MdOutlineEmail,
      title: "Email",
      subtitle: "Kamalshakir@hotmail.com",
      link: "mailto:Kamalshakir@ymail.com",
      linkText: "Send a message",
    },
    {
      icon: RiMessengerLine,
      title: "Messenger",
      subtitle: "Shakir Kamal",
      link: "https://web.facebook.com/profile.php?id=61560641724719",
      linkText: "Send a message",
    },
    {
      icon: BsWhatsapp,
      title: "WhatsApp",
      subtitle: "+2349129969498",
      link: `https://api.whatsapp.com/send?phone=+2349129969498&text=${encodeURIComponent(
        "Hello! I am interested in your web development services and would like to discuss a project with you"
      )}`,
      linkText: "Send a message",
    },
  ];
  return (
    <section id="contact">
      <h5 style={{ color: darkMode && "white" }}>Get In Touch</h5>
      <h2 style={{ color: darkMode && "#4db5ff" }}>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          {contactOptions.map((option, index) => (
            <ContactOption
              key={index}
              index={index}
              hoveredIndex={hoveredIndex}
              setHoveredIndex={setHoveredIndex}
              darkMode={darkMode}
              icon={option.icon}
              title={option.title}
              subtitle={option.subtitle}
              link={option.link}
              linkText={option.linkText}
            />
          ))}
        </div>
        {/**End of Contact Options */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            style={{
              borderColor: darkMode && "#4db5ff",
              color: darkMode && "white",
            }}
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input
            style={{
              borderColor: darkMode && "#4db5ff",
              color: darkMode && "white",
            }}
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />
          <textarea
            style={{
              borderColor: darkMode && "#4db5ff",
              color: darkMode && "white",
            }}
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button
            style={{
              backgroundColor: darkMode && "#4db5ff",
              color: darkMode && "black",
            }}
            type="submit"
            className="btn btn-primary"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
