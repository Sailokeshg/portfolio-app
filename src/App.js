import React from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Results from "./components/Results";
import Experience from "./components/Experience";
import AIWork from "./components/AIWork";
import Research from "./components/Research";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <Navigation />
      <main>
        <Hero />
        <Results />
        <Experience />
        <AIWork />
        <Research />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
