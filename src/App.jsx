import React, { useEffect } from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";

import AOS from "aos";
import "aos/dist/aos.css";

import { LanguageProvider } from "./context/LanguageContext";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <LanguageProvider>
      <div className="bg-dark min-h-screen">

        <Navbar />

        <main>
          <Hero />
          <About />
          <Projects />
          <Contact />
        </main>

        <Footer />

      </div>
    </LanguageProvider>
  );
}

export default App;