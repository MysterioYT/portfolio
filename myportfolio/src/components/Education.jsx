import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import AOS from "aos";
import "aos/dist/aos.css";
import "../components/Style/Education.css";

import cert1 from "../assets/certificate1.jpg";
import cert2 from "../assets/certificate2.jpg";
import cert3 from "../assets/certificate3.jpg";
import cert4 from "../assets/certificate4.jpg";
import cert5 from "../assets/certificate5.jpg";
import cert6 from "../assets/certificate6.jpg";

// Education Data
const educationData = [
  {
    year: "Appearing (2022-2026)",
    title: "B.Tech in Computer Science & Engineering",
    place: "Dr. Sudhir Chandra Sur Institute Of Technology And Sports Complex",
    board: "MAKAUT UNIVERSITY",
    percentage: "7.41 CGPA",
    link: "#",
  },
  {
    year: "2022",
    title: "Higher Secondary Education",
    place: "The Scottish Church Collegiate School",
    board: "WBCHSE",
    percentage: "68.4%",
    link: "https://drive.google.com/file/d/1IUnW3psOS2OrUK_R9ySNSvzGoWgLt8B6/view?usp=drive_link",
  },
  {
    year: "2020",
    title: "Secondary Education",
    place: "The Scottish Church Collegiate School",
    board: "WBBSE",
    percentage: "71.57%",
    link: "https://drive.google.com/file/d/1F6SJYwltIr77Pfr9zdTgzFYJdgPM8GHI/view?usp=drive_link",
  },
];

// Certificates Data
const certificates = [
  {
    title: "What is Data Science?",
    issuer: "Coursera",
    year: "2024",
    link: "https://coursera.org/share/837d0afc3f61e1f46443bb1142669983",
    image: cert1,
  },
  {
    title: "Python with Django",
    issuer: "Euphoriagenx",
    year: "2023",
    link: "https://drive.google.com/file/d/1i6dazXjpW4aTsAeiW_g5YQxTc3fP_E23/view?usp=drive_link",
    image: cert2,
  },
  {
    title: "Programming for Everybody (Getting Started with Python)",
    issuer: "Coursera",
    year: "2023",
    link: "https://coursera.org/share/6531b0d321a35481c8b62ae9ba9aa114",
    image: cert3,
  },
  {
    title: "INTERNET OF THINGS (IOT)",
    issuer: "Ardent computech pvt ltd",
    year: "2024",
    link: "https://drive.google.com/file/d/1Dyy6ExNCX08SoRVqRvtJlbk6qajFE4pZ/view?usp=drive_link",
    image: cert4,
  },
  {
    title: "FULL STACK WEB DEVELOPMENT",
    issuer: "Ardent computech pvt ltd",
    year: "2025",
    link: "https://drive.google.com/file/d/1nXKaIJGjK150RSXCQikev4Sau0B4i9rd/view?usp=drive_link",
    image: cert5,
  },
  {
    title:
      "CLOUD BASED FULL STACK DEVELOPMENT WITH AI ML INTEGRATION USING MERN",
    issuer: "Ardent computech pvt ltd",
    year: "2025",
    link: "https://drive.google.com/file/d/1BrrHpCrvRSAHddPx1CD1-wdWo0jrG8Ut/view?usp=drive_link",
    image: cert6,
  },
];

const Education = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: false });
  }, []);

  return (
    <>
      <section id="education">
        <section id="edu-cert" className="edu-cert-section">
          <h1
            className="main-heading"
            data-aos="fade-down"
            data-aos-delay="200"
          >
            My Academic Background & Certifications
          </h1>
          <div className="edu-cert-container">
            {/* Education Timeline */}
            <div className="education-box" data-aos="fade-right">
              <h2 className="section-title">🎓 Education</h2>
              <div className="timeline">
                {educationData.map((edu, index) => (
                  <div
                    key={index}
                    className={`timeline-item ${
                      index % 2 === 0 ? "left" : "right"
                    }`}
                    data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                    data-aos-delay={200 * (index + 1)}
                  >
                    <div className="timeline-content">
                      <span className="timeline-year">{edu.year}</span>
                      <h3 className="timeline-title">{edu.title}</h3>
                      <p className="timeline-place">{edu.place}</p>
                      <p className="timeline-board">
                        <strong>Board:</strong> {edu.board}
                      </p>
                      <p className="timeline-percentage">
                        <strong>Percentage:</strong> {edu.percentage}
                      </p>
                      <a
                        href={edu.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="read-more-btn"
                      >
                        Read More →
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certificates Swiper (Full box animated once) */}
            <div
              className="certificate-box"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              <h2 className="section-title">📜 Certificates</h2>
              <Swiper
                direction={"vertical"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                modules={[Autoplay, Pagination]}
                className="mySwiper"
              >
                {certificates.map((cert, index) => (
                  <SwiperSlide key={index} className="certificate-card">
                    <div className="cert-image-box">
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="cert-image"
                      />
                    </div>
                    <h3>{cert.title}</h3>
                    <p>{cert.issuer}</p>
                    <p>{cert.year}</p>
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cert-btn"
                    >
                      View Certificate
                    </a>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Education;
