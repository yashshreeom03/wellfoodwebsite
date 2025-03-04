import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutUs = ({ title, description }) => {
  useEffect(() => {
    AOS.init({ duration: 1500, offset: 50 });
  }, []);

  return (
    <div className="col-lg-6">
      <div className="about-us-content" data-aos="fade-right">
        <div className="section-title mb-25">
          <span className="sub-title mb-5">Learn About WellFood</span>
          <h2>{title}</h2>
        </div>
        <p>{description}</p>

        {/* Buttons */}
        <div className="about-btn-author pt-5 mb-60">
          <a href="/about" className="theme-btn style-two">
            Learn More <i className="far fa-arrow-alt-right"></i>
          </a>
          <a href="/menu" className="read-more">
            Explore Popular Menu <i className="far fa-arrow-alt-right"></i>
          </a>
        </div>

        {/* Stats Section */}
        <div className="row">
          <div className="col-sm-4 col-6">
            <div className="counter-item style-two counter-text-wrap">
              <span className="count-text k-plus" data-speed="3000" data-stop="34"></span>
              <span className="counter-title">Organic Planting</span>
            </div>
          </div>
          <div className="col-sm-4 col-6">
            <div className="counter-item style-two counter-text-wrap">
              <span className="count-text plus" data-speed="3000" data-stop="356"></span>
              <span className="counter-title">Passionate Chef’s</span>
            </div>
          </div>
          <div className="col-sm-4 col-6">
            <div className="counter-item style-two counter-text-wrap">
              <span className="count-text plus" data-speed="3000" data-stop="8534"></span>
              <span className="counter-title">Favourite Dishes</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
