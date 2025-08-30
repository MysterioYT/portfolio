import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../components/Style/Project.css";

const projectImg1 =
  "https://cdn.prod.website-files.com/62c5836076839ad95e36215d/64fb2b64316862df3d2e099a_rcQYosTUaQ6hiJSAk7JphBXJCcZpPSAnq6u8U_3pnj0UVcHM5niGdGNBZ625bnZmRDTg4UQFOjd8tuczIfNSZ7JQeRBtnY4NHvGyGjRBe_DVE4QiDsVy9vcllRT7B1Ut7wx9CBDr945F26Um1hF4xM4.png";
const projectImg2 =
  "https://cdn.corporatefinanceinstitute.com/assets/real-estate.jpeg";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1200, once: false });
  }, []);

  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description:
        "Developed a responsive personal Portfolio Website using React, HTML, and TailwindCSS to showcase projects, skills, and certifications. Designed with modern UI/UX principles, ensuring fast performance and mobile-friendly layouts.",
      img: projectImg1,
      codeLink: "https://github.com/",
      liveLink: "https://your-portfolio.com",
    },
    {
      id: 2,
      title: "REAL-ESTATE-WEBSITE",
      description:
        "Built a full-featured Real Estate Website using the MERN stack (MongoDB, Express.js, React, Node.js), enabling property listing, search, and management. It simplifies real estate transactions with filters, virtual tours, and seamless buyer-seller interaction.",
      img: projectImg2,
      codeLink: "https://github.com/MysterioYT/REAL-ESTATE-WEBSITE.git",
      liveLink: "https://github.com/MysterioYT/REAL-ESTATE-WEBSITE.git",
    },
  ];

  return (
    <>
      <section id="projects" className="projects-section">
        <h2 className="projects-heading" data-aos="fade-down">
          My Projects
        </h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              className="project-card"
              key={project.id}
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <div className="project-img-box">
                <img
                  src={project.img}
                  alt={project.title}
                  className="project-img"
                />
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <button
                className="view-more-btn"
                onClick={() => setSelectedProject(project)}
              >
                View More
              </button>
            </div>
          ))}
        </div>

        {/* ===== Popup Modal ===== */}
        {selectedProject && (
          <div
            className="modal-overlay"
            data-aos="zoom-in"
            data-aos-duration="600"
          >
            <div className="modal-content">
              <div className="modal-img-box">
                <img
                  src={selectedProject.img}
                  alt={selectedProject.title}
                  className="modal-img"
                />
              </div>

              <h2>{selectedProject.title}</h2>
              <p>{selectedProject.description}</p>
              <div className="modal-actions">
                <a
                  href={selectedProject.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modal-btn"
                >
                  View Code
                </a>
                <a
                  href={selectedProject.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modal-btn"
                >
                  View Website
                </a>
              </div>
              <button
                className="modal-close-btn"
                onClick={() => setSelectedProject(null)}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Projects;
