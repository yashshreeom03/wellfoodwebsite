import React from "react";
import tomatoImage from "../../assets/images/shapes/tomato.png";
import burgerImage from "../../assets/images/shapes/burger.png";

const marqueeItems = [
  "Italian pizza",
  <i className="flaticon-star" key="star1"></i>,
  "delicious foods",
  <i className="flaticon-star" key="star2"></i>,
  "burger king",
  <i className="flaticon-star" key="star3"></i>,
];

const HeadlineMarquee = () => {
  return (
    <div className="headline-area mb-105 rmb-85 rel z-1">
      <div className="marquee-wrap">
        {[...Array(3)].map((_, index) => (
          <div className="marquee-inner left" key={index}>
            {marqueeItems.map((item, i) => (
              <span className="marquee-item" key={i}>
                {item}
              </span>
            ))}
          </div>
        ))}
      </div>
      
      {/* Floating Shapes */}
      <div className="headline-shapes">
        <div className="shape one">
          <img src={tomatoImage} alt="Tomato Shape" />
        </div>
        <div className="shape two">
          <img src={burgerImage} alt="Burger Shape" />
        </div>
      </div>
    </div>
  );
};

export default HeadlineMarquee;
