import React from "react";
import "./Work.css";
import Works from "./Works";

const Work = () => {
  return (
    <section id="portfolio" className="work section">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">Most recent works</span>
      <Works />
    </section>
  );
};

export default Work;
