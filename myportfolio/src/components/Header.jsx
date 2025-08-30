import React, { useState, useEffect } from 'react';
import './Style/Header.css';
import { FaBars, FaTimes, FaLinkedin, FaGithub } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // progress calculation
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScroll(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 👇 Smooth scroll & animation trigger
  const handleNavClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      // smooth scroll into view
      section.scrollIntoView({ behavior: "smooth", block: "start" });

      // replay animation
      section.classList.remove("nav-triggered-animation");
      void section.offsetWidth; // trick to restart animation
      section.classList.add("nav-triggered-animation");
    }
    setMenuOpen(false);
  };

  return (
    <>
      {/* 🔵 Scroll Progress Line */}
      <div className="scroll-progress">
        <div className="scroll-progress-bar" style={{ width: `${scroll}%` }}></div>
      </div>

      <header className={scrolled ? "scrolled" : ""}>
        <div className="logo">
          <span className='co'>&lt;</span>
          <span>Arpon</span>
          <span className='co'>/</span>
          <span>Sana</span>
          <span className='co'>&gt;</span>
        </div>

        {/* Hamburger button */}
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Nav Links */}
        <nav className={`nav-bar ${menuOpen ? "active" : ""}`}>
          <ul>
            <li><a onClick={() => handleNavClick("home1")}>Home</a></li>
            <li><a onClick={() => handleNavClick("about")}>About</a></li>
            <li><a onClick={() => handleNavClick("skills")}>Skills</a></li>
            <li><a onClick={() => handleNavClick("experience")}>Experience</a></li>
            <li><a onClick={() => handleNavClick("education")}>Education</a></li>
            <li><a onClick={() => handleNavClick("projects")}>Projects</a></li>
          </ul>
        </nav>

        <div className="link">
          <a href="https://www.linkedin.com/in/arpon-sana-87218a263" target='blank'><FaLinkedin /></a>
          <a href="https://github.com/MysterioYT" target='blank'><FaGithub /></a>
        </div>
      </header>
    </>
  );
}

export default Header;
