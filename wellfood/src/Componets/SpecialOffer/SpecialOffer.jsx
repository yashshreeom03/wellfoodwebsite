import React from "react";
import deliciousImg from "../../assets/images/offer/delicious.png";
import offerImg from "../../assets/images/offer/offer-img.png";
import offerShape1 from "../../assets/images/shapes/offer-shape1.png";
import offerShape2 from "../../assets/images/shapes/offer-shape2.png";
import offerShape3 from "../../assets/images/shapes/offer-shape3.png";
import offerCircle from "../../assets/images/shapes/offer-circle-shape.png";

const marqueeItems = ["special deal", "special deal", "special deal"];

const SpecialOffer = () => {
  return (
    <section
      className="offer-area bgc-black pt-160 rpt-100 pb-150 rpb-120 rel z-1"
    >
      {/* Marquee Section */}
      <span className="marquee-wrap style-two text-white">
        {marqueeItems.map((item, index) => (
          <span key={index} className="marquee-inner left">
            {item}
          </span>
        ))}
      </span>

      <div className="container">
        <div className="row align-items-center">
          {/* Offer Content */}
          <div
            className="col-lg-6"
            data-aos="fade-left"
            data-aos-delay="50"
            data-aos-duration="1500"
            data-aos-offset="50"
          >
            <div className="offer-content text-white rmb-55">
              <img src={deliciousImg} alt="Delicious Food" />
              <h2>Special deal offer for this week</h2>
              <h3>
                grilled beef meat only <span>$59</span>
              </h3>
              <p>
                Restaurant, where culinary excellence meets warm hospitality in every dish we serve,
                nestled in the heart of the city.
              </p>
              <a href="shop.html" className="theme-btn">
                order now <i className="far fa-arrow-alt-right"></i>
              </a>
            </div>
          </div>

          {/* Offer Image */}
          <div
            className="col-lg-6"
            data-aos="fade-right"
            data-aos-delay="50"
            data-aos-duration="1500"
            data-aos-offset="50"
          >
            <div className="offer-image">
              <img src={offerImg} alt="Offer Image" />
              <div
                className="offer-badge"
                style={{ backgroundImage: `url(${offerCircle})` }}
              >
                <span>
                  only <br />
                  <span className="price">$59</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Offer Shapes */}
      <div className="offer-shapes">
        <div className="shape one">
          <img src={offerShape1} alt="Shape 1" />
        </div>
        <div className="shape two">
          <img src={offerShape2} alt="Shape 2" />
        </div>
        <div className="shape three">
          <img src={offerShape3} alt="Shape 3" />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
