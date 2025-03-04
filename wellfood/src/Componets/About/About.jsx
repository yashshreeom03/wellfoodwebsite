import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import reviewAuthor from "../../assets/images/about/review-author.png";
import aboutImage from "../../assets/images/about/about.png";
import aboutStar from "../../assets/images/shapes/about-star.png";
import pizzaThree from "../../assets/images/shapes/pizza-three.png";

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <section className="about-us-area pt-130 rpt-85 pb-100 rpb-70 rel z-1">
      <div className="container">
        <div className="row align-items-end">
          {/* Left Side Image */}
          <div className="col-lg-6">
            <div className="about-image-part mb-30 rmb-55" data-aos="fade-right">
              <div className="food-review">
                <div className="author">
                  <img src={reviewAuthor} alt="Author" />
                </div>
                <span className="text">Very good food</span>
                <div className="ratting">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
              </div>
              <img src={aboutImage} alt="About" />
              <div className="quality-food" style={{ backgroundImage: `url(${aboutStar})` }}>
                <span className="for-border"></span>
                <span className="text">quality <br />food</span>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="about-us-content" data-aos="fade-left">
              <div className="section-title mb-25">
                <span className="sub-title mb-5">learn About wellfood</span>
                <h2>the amazing & Quality food for your good health</h2>
              </div>
              <p>
                Welcome to our restaurant, where culinary excellence meets warm hospitality in every dish we serve. Nestled in the heart of the city, our eatery invites you on a journey.
              </p>
              <div className="about-btn-author pt-5 mb-45">
                <Link to="about.html" className="theme-btn style-two">
                  learn more us <i class="far fa-arrow-alt-right"></i>
                </Link>
                <Link to="about.html" className="read-more">
                  Explore popular menu  <i class="far fa-arrow-alt-right"></i>
                </Link>
              </div>

              <div className="row">
                <div className="col-sm-6">
                  <div className="service-item style-two">
                    <div className="icon">
                      <i className="flaticon-high-quality"></i>
                    </div>
                    <h5><Link to="menu-burger.html">Best Quality Food</Link></h5>
                    <p>Our talented chefs craft each dish with precision sourcing.</p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="service-item style-two">
                    <div className="icon">
                      <i className="flaticon-chef"></i>
                    </div>
                    <h5><Link to="menu-burger.html">Experience our Chefs</Link></h5>
                    <p>Our talented chefs craft each dish with precision sourcing.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Shape Decoration */}
        <div className="about-shapes">
          <div className="shape one">
            <img src={pizzaThree} alt="Shape" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
