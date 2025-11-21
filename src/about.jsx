import yeahLogo from '/Yeah-logo.png'
import leaf from './assets/basil-leaf.png'
import React, { useEffect, useRef } from 'react'
import './App.css'


const about = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
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

  const currentRef = aboutRef.current;
  if (currentRef) observer.observe(currentRef);

  return () => {
    if (currentRef) observer.unobserve(currentRef);
  };
}, []);
  return (
    <div className="hidden" ref={aboutRef}>
        <div className="about">
            <div className="about-content">
                <div className="about-image">
                <img src={yeahLogo} alt="About Yeah Food"/>
                </div>
                <div className="about-text">
                    <h2>About Yeah Food Limited</h2>
                    <p>
                        At <strong>Yeah Food Limited</strong>, we believe great taste begins with natural ingredients and bold ideas. 
                        Our mission is to craft refreshing, nutritious, and delightful beverages that bring joy to every sip.
                    </p>
                    <p>
                        From our signature malt milk drinks to our growing range of fruit-infused refreshments, 
                        we’re passionate about blending quality, flavor, and innovation — the Yeah way!
                    </p>
                    <a href="#learn-more" className="about-btn">Learn More</a>
                </div>
            </div>
            <img src={leaf} alt="" className="about-leaf leaf-left"/>
            <img src={leaf} alt="" className="about-leaf leaf-right"/>
        </div>

    </div>
    

  )
}

export default about
