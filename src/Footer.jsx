import React, { useEffect } from "react";

import "./Footer.css";

const Footer = () => {
  // scroll animation (same pattern for consistency)
  useEffect(() => {
    const hiddenElements = document.querySelectorAll(".hidden");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    hiddenElements.forEach((el) => observer.observe(el));
    return () => hiddenElements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <footer className="footer hidden">
        
      <div className="footer-content">
        <div className="footer-logo">
          <img src="/images/logo.png" alt="Yeah Food Logo" />
          <h3>Yeah Food Limited</h3>
        </div>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#products">Products</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-contact">
          <p>Email: info@yeahfood.com</p>
          <p>Phone: +234 800 123 4567</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Yeah Food Limited. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
