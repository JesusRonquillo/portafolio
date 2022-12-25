import React from "react";
import "./About.css";
import AboutImg from "../../assets/about.jpg";

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My introduction</span>
      <div className="about__container container grid"></div>
    </section>
  );
};

export default About;
