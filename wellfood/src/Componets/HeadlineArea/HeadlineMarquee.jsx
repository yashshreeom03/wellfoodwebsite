import React from "react";
import chilliesImg from "../../assets/images/shapes/chillies.png";
import tomatoImg from "../../assets/images/shapes/tomato.png";

const HeadlineMarquee = () => {
  const marqueeItems = [
    "Italian pizza",
    <i className="flaticon-star" key="star1"></i>,
    "our Testimonials",
    <i className="flaticon-star" key="star2"></i>,
    "burger king",
    <i className="flaticon-star" key="star3"></i>,
  ];

  return (
    <div className="headline-area bgc-black pt-120 rpt-90 rel z-2">
      <span className="marquee-wrap white-text">
        {[...Array(3)].map((_, index) => (
          <span className="marquee-inner left" key={index}>
            {marqueeItems.map((item, i) => (
              <span className="marquee-item" key={i}>{item}</span>
            ))}
          </span>
        ))}
      </span>

      {/* Shapes */}
      <div className="headline-shapes">
        <div className="shape one">
          <img src={chilliesImg} alt="Chillies Shape" />
        </div>
        <div className="shape two">
          <img src={tomatoImg} alt="Tomato Shape" />
        </div>
      </div>
    </div>
  );
};

export default HeadlineMarquee;
