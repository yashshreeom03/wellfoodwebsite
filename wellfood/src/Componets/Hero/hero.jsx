import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../assets/css/fontawesome-5.14.0.min.css"

// Import Images
import heroBg from "../../assets/images/background/hero.png";
import heroRight from "../../assets/images/hero/hero-right.png";
import price from "../../assets/images/hero/price.png";
import shape1 from "../../assets/images/shapes/hero-shape1.png";
import shape2 from "../../assets/images/shapes/hero-shape2.png";
import shape3 from "../../assets/images/shapes/hero-shape3.png";
import shape4 from "../../assets/images/shapes/hero-shape4.png";
import shape5 from "../../assets/images/shapes/hero-shape5.png";
import { Link } from "react-router-dom";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <section
      className="hero-area bgs-cover pt-180 rpt-150 pb-100 rel z-1"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="container">
        <div className="row align-items-center">
          {/* Left Content */}
          <div className="col-lg-6">
            <div className="hero-content text-white" data-aos="fade-left">
              <span className="sub-title mb-35">
              <i class="fas fa-hamburger"></i> Start price Only $25
              </span>
              <h1>Delicious Food Near Your Town</h1>
              <p>
                Welcome to our culinary sanctuary, where every dish tells a story, and every bite is an adventure at our food website, we invite
              </p>
              <Link to="menu-chicken.html" className="theme-btn">
                View All Menu <i class="far fa-arrow-alt-right"></i>
              </Link>
            </div>
          </div>

          {/* Right Images */}
          <div className="col-lg-6" data-aos="fade-right">
            <div className="hero-images rmt-60">
              <img src={heroRight} alt="Hero" />
              <div className="price">
                <img src={price} alt="Price" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Shapes */}
      <div className="hero-shapes">
        <div className="shape one">
          <img src={shape1} alt="Hero Shape" />
        </div>
        <div className="shape two">
          <img src={shape2} alt="Hero Shape" />
        </div>
        <div className="shape three">
          <img src={shape3} alt="Hero Shape" />
        </div>
        <div className="shape four">
          <img src={shape4} alt="Hero Shape" />
        </div>
        <div className="shape five">
          <img src={shape5} alt="Hero Shape" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
