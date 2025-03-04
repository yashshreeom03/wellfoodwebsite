import React from "react";
import authorImg from "../../assets/images/about/author.png";
import chillies from "../../assets/images/shapes/chillies.png";
import tomato from "../../assets/images/shapes/tomato.png";
import pizza from "../../assets/images/shapes/pizza.png";

const counterItems = [
  { value: 34, text: "Organic Planting", suffix: "k+" },
  { value: 356, text: "Passionate Chef’s", suffix: "+" },
  { value: 853, text: "Favourite Dishes", suffix: "+" },
];

const services = [
  { icon: "flaticon-recommended-food", title: "Best Quality Food", link: "menu-burger.html" },
  { icon: "flaticon-fast-delivery", title: "Fast Food Delivery", link: "menu-burger.html" },
  { icon: "flaticon-cashback", title: "Money Back Guarantee", link: "menu-burger.html" },
  { icon: "flaticon-dish", title: "100% Natural Food", link: "menu-burger.html" },
];

const WhyChooseUs = () => {
  return (
    <section className="why-choose-area bgc-lighter pt-240 rpt-150 pb-100 rpb-70 rel z-1">
      <span className="marquee-wrap style-two">
        {[...Array(3)].map((_, index) => (
          <span key={index} className="marquee-inner left">Why choose Us</span>
        ))}
      </span>

      <div className="container">
        <div className="row align-items-center">
          {/* Left Content */}
          <div className="col-lg-6">
            <div className="why-choose-content rmb-30" data-aos="fade-up" data-aos-duration="1500" data-aos-offset="50">
              <div className="section-title mb-25">
                <span className="sub-title mb-5">Why choose us</span>
                <h2>We Offer Quality Service That Customers Need</h2>
              </div>
              <p>
                Welcome to our restaurant, where culinary excellence meets warm hospitality in every dish we serve.
                Nestled in the heart of City Name, our eatery invites you on a journey.
              </p>

              {/* Button & Author Info */}
              <div className="about-btn-author mb-60">
                <a href="about.html" className="theme-btn">
                  Learn More <i className="far fa-arrow-alt-right"></i>
                </a>
                <div className="author">
                  <img src={authorImg} alt="Author" />
                  <h6>Ben A. Conners / <span>CEO & Founder</span></h6>
                </div>
              </div>

              {/* Counter Items */}
              <div className="row">
                {counterItems.map((item, index) => (
                  <div key={index} className="col-sm-4 col-6">
                    <div className="counter-item counter-text-wrap">
                      <span className="count-text" data-speed="3000" data-stop={item.value}>
                        {item.value}{item.suffix}
                      </span>
                      <span className="counter-title">{item.text}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="col-lg-6">
            <div className="row">
              {services.map((service, index) => (
                <div key={index} className={`col-sm-6 ${index >= 2 ? "mt-30 rmt-0" : ""}`} 
                  data-aos="fade-up" 
                  data-aos-delay={index * 50} 
                  data-aos-duration="1500" 
                  data-aos-offset="50"
                >
                  <div className="service-item">
                    <div className="icon">
                      <i className={service.icon}></i>
                    </div>
                    <h4><a href={service.link}>{service.title}</a></h4>
                    <p>Sed ut perspiciatis unde omnis iste natus sit voluptatem</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating Shapes */}
      <div className="headline-shapes">
        <div className="shape one"><img src={chillies} alt="Shape" /></div>
        <div className="shape two"><img src={tomato} alt="Shape" /></div>
        <div className="shape three"><img src={pizza} alt="Shape" /></div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
