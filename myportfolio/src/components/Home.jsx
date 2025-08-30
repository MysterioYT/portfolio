import React, { useEffect } from 'react';
import "../components/Style/Home.css";
import { FaLinkedin, FaGithub, FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { Typewriter } from 'react-simple-typewriter';
import profilePic1 from "../assets/pic2.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <>
      <section id="home1">
        <div className="home">

          {/* Left Section */}
          <div className="box-1" data-aos="fade-right">
            <h1 className="home-h2">Hello !</h1>
            <h1 className="home-h1">
              I am <span style={{ fontWeight: "bold" }}>Arpon Sana</span>
            </h1>

            {/* Typing Effect */}
            <h2 className="typing-effect">
              I am{' '}
              <span style={{ color: "#22d3ee", fontWeight: "bold" }}>
                <Typewriter
                  words={[
                    'Full-Stack Developer.',
                    'Coder.',
                    'Backend Developer.',
                    'Aspiring Software Engineer.'
                  ]}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </span>
            </h2>

            <h3 className="home-h3" data-aos="fade-up" data-aos-delay="200">
              I’m an enthusiastic engineering student passionate about coding and software development,
              with a sharp eye for detail and problem-solving. I love exploring complex algorithms
              and turning challenges into elegant, efficient solutions.
            </h3>

            {/* Social Icons */}
            <div className="box-1-logo" data-aos="zoom-in" data-aos-delay="400">
              <a href="https://www.linkedin.com/in/arpon-sana-87218a263/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={32} color="#fff" />
              </a>
              <a href="https://github.com/MysterioYT" target="_blank" rel="noopener noreferrer">
                <FaGithub size={32} color="#fff" />
              </a>
              <a href="https://www.facebook.com/arpon.sana.3/" target="_blank" rel="noopener noreferrer">
                <FaFacebookSquare size={32} color="#fff" />
              </a>
              <a href="https://www.instagram.com/arpon_a.s?igsh=ejNlcjVhYXNhYXF4" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={32} color="#fff" />
              </a>
            </div>
          </div>

          {/* Right Section */}
          <div className="box-2" data-aos="fade-left">
            <img src={profilePic1} alt="Arpon Sana" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Home;
