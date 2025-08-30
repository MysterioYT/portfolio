import React from "react";
import "../components/Style/Experience.css";

const Experience = () => {
  return (
    <>
      <section id="experience" data-aos="fade-up" data-aos-duration="1200">
        <section className="internship-section">
          <div className="experience-heading" data-aos="zoom-in" data-aos-delay="100">
            <h1>My Professional Experiences</h1>
          </div>

          <div className="internship-card" data-aos="fade-up" data-aos-delay="200">
            <h2 className="internship-title">Full Stack Development Intern</h2>
            <p className="internship-info">
              <strong>Company:</strong> Ardent Computech Pvt Ltd
            </p>
            <p className="internship-info">
              <strong>Duration:</strong> Apr 2025 – Aug 2025
            </p>
            <p className="internship-info">
              <strong>Location:</strong> Kolkata, India
            </p>

            <div className="internship-description" data-aos="fade-up" data-aos-delay="300">
              <p>
                Completed a structured, hands-on training program focused on cloud-based full-stack development (MERN stack).
                Developed and deployed scalable web applications with AI/ML integration and RESTful APIs.
              </p>
            </div>

            <a
              href="https://drive.google.com/file/d/1BrrHpCrvRSAHddPx1CD1-wdWo0jrG8Ut/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="read-more-btn"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              Read More →
            </a>
          </div>
        </section>
      </section>
    </>
  );
};

export default Experience;
