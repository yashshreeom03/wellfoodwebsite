import React from "react";
import footerBg from "../../assets/images/background/footer-bg.png";
import logo from "../../assets/images/logos/logo.png";
import shape1 from "../../assets/images/shapes/hero-shape5.png";
import shape2 from "../../assets/images/shapes/tomato.png";
import shape3 from "../../assets/images/shapes/pizza-two.png";

const Footer = () => {
  return (
    <footer className="main-footer bgc-black rel z-1" style={{ backgroundImage: `url(${footerBg})` }}>
      {/* Newsletter Section */}
      <div className="footer-top py-130 rpy-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-9" data-aos="fade-up" data-aos-duration="1500" data-aos-offset="50">
              <div className="section-title text-white text-center mb-35">
                <span className="sub-title mb-10">Join Our Newsletter</span>
                <h2>Subscribe & Follow Our Newsletter to Get More Updates</h2>
              </div>
              <form className="newsletter-form" action="#">
                <label htmlFor="news-email">
                  <i className="fas fa-envelope"></i>
                </label>
                <input id="news-email" type="email" placeholder="Email Address" required />
                <button className="theme-btn" type="submit">
                  Subscribe <i className="far fa-arrow-alt-right"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Widgets */}
      <div className="widget-area pb-70">
        <div className="container">
          <div className="row justify-content-between">
            {/* About Section */}
            <div className="col-xl-3 col-lg-4 col-sm-6" data-aos="fade-up" data-aos-duration="1500" data-aos-offset="0">
              <div className="footer-widget footer-text">
                <div className="footer-logo mb-25">
                  <a href="index.html">
                    <img src={logo} alt="Logo" />
                  </a>
                </div>
                <p>Temporibus autem quibusdam officiis aut rerum necessitatibus eveniet voluta repudiandae molestiae recusandae.</p>
                <div className="social-style-one mt-15">
                  <a href="contact.html">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="contact.html">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="contact.html">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="contact.html">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Popular Food Links */}
            <div className="col-xl-4 col-lg-5 col-sm-6" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1500" data-aos-offset="0">
              <div className="footer-widget footer-links">
                <div className="footer-title">
                  <h5>Popular Food</h5>
                </div>
                <ul className="two-column">
                  {[
                    "Hamburger",
                    "French Fries",
                    "Chicken Pizza",
                    "Onion Rings",
                    "Vegetable Roll",
                    "Chicken Nuggets",
                    "Sea Fish",
                    "Tacos Pizza",
                    "Fried Chicken",
                    "Hot Dogs",
                  ].map((item, index) => (
                    <li key={index}>
                      <a href="product-details.html">{item}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact & Opening Hours */}
            <div className="col-xl-5">
              <div className="row justify-content-between">
                {/* Contact Info */}
                <div className="col-xl-6 col-lg-5 col-sm-6" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1500" data-aos-offset="0">
                  <div className="footer-widget footer-contact">
                    <div className="footer-title">
                      <h5>Contact Us</h5>
                    </div>
                    <ul>
                      <li>1403 Washington Ave, New Orleans, LA 70130, United States</li>
                      <li>
                        <a href="mailto:wellfood@gmail.com">
                          <u>wellfood@gmail.com</u>
                        </a>
                      </li>
                      <li>
                        <a href="callto:+(1)0987654321">+(1) 098 765 4321</a>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Opening Hours */}
                <div className="col-xl-6 col-lg-5 col-sm-6" data-aos="fade-up" data-aos-delay="150" data-aos-duration="1500" data-aos-offset="0">
                  <div className="footer-widget opening-hour">
                    <div className="footer-title">
                      <h5>Opening Hours</h5>
                    </div>
                    <ul>
                      <li>Monday – Friday: <span>8am – 4pm</span></li>
                      <li>Saturday: <span>8am – 12am</span></li>
                    </ul>
                    <div className="any-question mt-20">
                      <h5>Have any questions?</h5>
                      <a href="#" className="theme-btn style-two">
                        Let’s Talk <i className="far fa-arrow-alt-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom pt-30 pb-15">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="copyright-text text-center text-lg-start">
                <p>
                  Copyright 2024 <a href="index.html">Wellfood</a>. All Rights Reserved
                </p>
              </div>
            </div>
            <div className="col-lg-7 text-center text-lg-end">
              <ul className="footer-bottom-nav">
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms & Conditions</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Scroll Top Button */}
          <button className="scroll-top scroll-to-target" data-target="html">
            <i className="fas fa-arrow-alt-up"></i>
          </button>
        </div>
      </div>

      {/* Footer Shapes */}
      <div className="footer-shapes">
        <div className="shape one">
          <img src={shape1} alt="Shape" />
        </div>
        <div className="shape two">
          <img src={shape2} alt="Shape" />
        </div>
        <div className="shape three">
          <img src={shape3} alt="Shape" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
