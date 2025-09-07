import React, { useEffect } from "react";
import profilePic from "../assets/pic2.jpg";
import "../components/Style/About.css";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // speed of animation
      once: false,    // repeat every time you scroll
      mirror: true,   // animate out when scrolling up
    });
  }, []);

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        
        {/* Left Section */}
        <div className="about-left" data-aos="fade-right">
          <img className="profile-img" src={profilePic} alt="My Profile" data-aos="zoom-in" />
          <h3 data-aos="fade-up">Technical Skills</h3>

          <div className="skills">
            <div className="skill" data-aos="fade-right" data-aos-delay="100">
              <span>Web Development</span>
              <div className="skill-bar">
                <div className="skill-fill" style={{ width: "85%" }}></div>
              </div>
            </div>
            <div className="skill" data-aos="fade-right" data-aos-delay="200">
              <span>Data Structures & Algorithms</span>
              <div className="skill-bar">
                <div className="skill-fill" style={{ width: "85%" }}></div>
              </div>
            </div>
            <div className="skill" data-aos="fade-right" data-aos-delay="300">
              <span>Java</span>
              <div className="skill-bar">
                <div className="skill-fill" style={{ width: "75%" }}></div>
              </div>
            </div>
            <div className="skill" data-aos="fade-right" data-aos-delay="400">
              <span>JavaScript</span>
              <div className="skill-bar">
                <div className="skill-fill" style={{ width: "85%" }}></div>
              </div>
            </div>
            <div className="skill" data-aos="fade-right" data-aos-delay="500">
              <span>DBMS</span>
              <div className="skill-bar">
                <div className="skill-fill" style={{ width: "80%" }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="about-right" data-aos="fade-left">
          <h2 data-aos="fade-up">
            About <span>Me</span>
          </h2>
          <p data-aos="fade-up" data-aos-delay="150">
            I am an aspiring engineering student with a deep passion for coding, 
            particularly in frontend development. My ambition is to become a 
            successful software engineer known for crafting intuitive user interfaces 
            and robust applications.
          </p>

          <ul>
            <li data-aos="fade-up" data-aos-delay="200"><strong>Address:</strong> Kolkata, West Bengal, India</li>
            <li data-aos="fade-up" data-aos-delay="300"><strong>Education:</strong> B.Tech in Computer Science & Engineering</li>
            <li data-aos="fade-up" data-aos-delay="400"><strong>Languages:</strong> English, Bengali, Hindi</li>
            <li data-aos="fade-up" data-aos-delay="500"><strong>Interests:</strong> Traveling, Photography, Playing Video Games</li>
            <li data-aos="fade-up" data-aos-delay="600"><strong>Sports:</strong> Football, Cricket</li>
          </ul>

          <a
            href="https://drive.google.com/file/d/1rLcOFw1ehZTYOLCi0-kDZ_4KM8LJi2uE/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin-btn"
            data-aos="zoom-in"
            data-aos-delay="700"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
