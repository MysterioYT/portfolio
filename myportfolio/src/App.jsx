import React, { useEffect, useState } from "react";
import Home from './components/Home'
import Header from './components/Header'
import About from './components/About'
import Skill from './components/Skill'
import Experience from './components/Experience'

import Project from './components/Project'
import Footer from './components/Footer'
import Backtotop from './components/Backtotop'

import SplashScreen from "./components/SplashScreen";

import AOS from "aos";
import "aos/dist/aos.css";
import Education from "./components/Education";


const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <>
      {showSplash ? (
        <SplashScreen onFinish={() => setShowSplash(false)} />
      ) : (
        <>
          <Header />
          <Home/>
          <About/>
          <Skill />
          <Experience />
          <Education />
          <Project />
          <Backtotop />
          <Footer />
        </>
      )}
    </>
  );
};

export default App;