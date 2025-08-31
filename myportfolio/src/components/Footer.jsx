import React, { useState } from "react";
import "../components/Style/Footer.css";
import { toast } from "react-toastify"; // ✅ only import toast, NOT ToastContainer
import emailjs from "@emailjs/browser";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"
const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // ✅ Handle Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0nkyx5q", // 👉 your Service ID
        "template_pww2s1f", // 👉 replace with your Template ID
        e.target,
        "hzSo73OxSWtNrQ7Ob" // 👉 replace with your Public Key
      )
      .then(
        () => {
          toast.success("✨ Your message has been sent!", {
            position: "top-right",
            autoClose: 3000,
            style: {
              background: "#0f172a",
              color: "#22d3ee",
              fontWeight: "bold",
              border: "1px solid #22d3ee",
              borderRadius: "10px",
              boxShadow: "0 0 15px rgba(34, 211, 238, 0.7)",
            },
            icon: "🚀",
          });
          e.target.reset();
          setIsModalOpen(false);
        },
        () => {
          toast.error("❌ Failed to send message. Try again!", {
            position: "top-right",
            autoClose: 3000,
            style: {
              background: "#0f172a",
              color: "#f87171",
              fontWeight: "bold",
              border: "1px solid #f87171",
              borderRadius: "10px",
              boxShadow: "0 0 15px rgba(248, 113, 113, 0.7)",
            },
            icon: "⚠️",
          });
        }
      );
  };

  return (
    <>
    <ToastContainer/>
<footer className="footer-section">
        {/* 3D Animated Background */}
        <div className="footer-bg"></div>

        {/* Top Section */}
        <div className="footer-top">
          <h2 className="footer-heading">
            Thanks again for scrolling through my work ✨
          </h2>
          <p className="footer-subtext">
            Thanks again for exploring my portfolio. <br />
            I’d love to connect, collaborate, or just chat over coffee ☕.
          </p>

          {/* Social Links */}
          <div className="footer-links">
            <a
              href="https://github.com/MysterioYT"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/arpon-sana-87218a263?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <button onClick={() => setIsModalOpen(true)}>Contact Me</button>
          </div>
        </div>

        {/* Contact Modal */}
        {isModalOpen && (
          <div
            className="modal-overlay-F"
            onClick={() => setIsModalOpen(false)}
          >
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              {/* Close Button */}
              <span
                className="close-btn-F circle"
                onClick={() => setIsModalOpen(false)}
              >
                &times;
              </span>
              <h3>Contact Me</h3>

              {/* ✅ Updated form with EmailJS */}
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="user_name"
                  placeholder="Your Name"
                  required
                />
                <input
                  type="email"
                  name="user_email"
                  placeholder="Your Email"
                  required
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="4"
                  required
                ></textarea>
                <button type="submit">Send Message</button>
              </form>
            </div>
          </div>
        )}

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>
            Copyright © {new Date().getFullYear()} By{" "}
            <span>Arpon Sana</span> | All Rights Reserved.
          </p>
        </div>
      </footer>

      
    </>
  );
};

export default Footer;


