import React from "react";
import "./App.css";
import About from "./components/about/About";
import Header from "./components/header/Header";
import Home from "./components/Home/Home";
import Services from "./components/services/Services";
import Skills from "./components/skills/Skills";
import Qualification from "./components/qualification/Qualification";
import Testimonial from "./components/testimonial/Testimonial";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualification />
        <Testimonial />
      </main>
    </div>
  );
}

export default App;
