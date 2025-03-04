import React from "react";
import ctaShape from "../../assets/images/shapes/cta-shape.png";
import ctaBg from "../../assets/images/background/cta.png";

const CTA = () => {
  return (
    <section className="cta-area py-100 rel z-1">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-8">
            <div className="cta-content">
              <div className="section-title text-white mb-20">
                <span className="sub-title mb-5">Need any food?</span>
                <h2>Looking for best quality food or restaurant?</h2>
              </div>
              <a href="contact.html" className="theme-btn style-two">
                Get a Quote <i className="far fa-arrow-alt-right"></i>
              </a>
              <div
                className="cta-badge"
                style={{ backgroundImage: `url(${ctaShape})` }}
              >
                <span>
                  Quality
                  <br /> Food
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cta-bg" style={{ backgroundImage: `url(${ctaBg})` }}></div>
    </section>
  );
};

export default CTA;
