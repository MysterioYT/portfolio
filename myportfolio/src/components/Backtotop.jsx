import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import "../components/Style/Backtotop.css";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {  // 👈 appear after 200px scroll
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // 👈 smooth scroll effect
    });
  };

  return (
    <button
      className={`back-to-top ${visible ? "show" : "hide"}`}
      onClick={scrollToTop}
    >
      <FaArrowUp />
    </button>
  );
};

export default BackToTop;
