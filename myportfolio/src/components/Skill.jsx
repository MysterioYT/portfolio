import { 
  FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaJava, FaPython, FaGithub, FaGitAlt 
} from "react-icons/fa";
import { 
  SiJavascript, SiMongodb, SiMysql, SiPostgresql, SiCplusplus, 
  SiRedux, SiTailwindcss, SiBootstrap, SiExpress, SiFirebase, 
  SiSpringboot, SiFigma, SiPostman, SiVercel 
} from "react-icons/si";
import "../components/Style/Skill.css";

const Skill = () => {
  return (
    <>
      <section id="skills" data-aos="fade-up" data-aos-duration="1200">
        <section id="abilities">
          <h2 data-aos="zoom-in" data-aos-delay="100">SKILLS</h2>
          <p data-aos="fade-up" data-aos-delay="200">
            A collection of my technical skills and expertise honed through various projects and experiences
          </p>

          <div id="abilities-grid">

            {/* Frontend */}
            <div data-aos="fade-right" data-aos-delay="300">
              <h3>Frontend</h3>
              <ul>
                <li><FaHtml5 className="icon" /> HTML</li>
                <li><FaCss3Alt className="icon" /> CSS</li>
                <li><SiJavascript className="icon" /> JavaScript</li>
                <li><FaReact className="icon" /> React JS</li>
                <li><SiRedux className="icon" /> Redux</li>
                <li><SiTailwindcss className="icon" /> Tailwind</li>
                <li><SiBootstrap className="icon" /> Bootstrap</li>
              </ul>
            </div>

            {/* Backend */}
            <div data-aos="fade-left" data-aos-delay="400">
              <h3>Backend</h3>
              <ul>
                <li><FaNodeJs className="icon" /> Node.js</li>
                <li><SiExpress className="icon" /> Express.js</li>
                <li><SiSpringboot className="icon" /> Spring Boot</li>
                <li><SiMysql className="icon" /> MySQL</li>
                <li><SiMongodb className="icon" /> MongoDB</li>
                <li><SiPostgresql className="icon" /> PostgreSQL</li>
                <li><SiFirebase className="icon" /> Firebase</li>
              </ul>
            </div>

            {/* Languages */}
            <div data-aos="fade-right" data-aos-delay="500">
              <h3>Languages</h3>
              <ul>
                <li><SiCplusplus className="icon" /> C++</li>
                <li><FaJava className="icon" /> Java</li>
                <li><FaPython className="icon" /> Python</li>
                <li><SiJavascript className="icon" /> JavaScript</li>
              </ul>
            </div>

            {/* Tools */}
            <div data-aos="fade-left" data-aos-delay="600">
              <h3>Tools</h3>
              <ul>
                <li><FaGitAlt className="icon" /> Git</li>
                <li><FaGithub className="icon" /> GitHub</li>
                <li><SiPostman className="icon" /> Postman</li>
                <li><SiVercel className="icon" /> Vercel</li>
                <li><SiFigma className="icon" /> Figma</li>
              </ul>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Skill;
