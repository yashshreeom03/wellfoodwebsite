import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import PageBanner from "../../Componets/PageBanner/PageBanner";
import Gril from "../../assets/images/food/gril.png";
import StarYellow from "../../assets/images/shapes/about-star-yellow.png";
import AboutDetails from "../../Componets/AboutDetails/AboutDetails";
import HeadlineBurger from "../../Componets/HeadlineArea/HeadlineBurger";
import GrillData from "../../Componets/Data/GrillData";
import OfferCards from "../../Componets/OfferCards/OfferCards";
import ChickenMenu1 from "../../assets/images/shapes/chicken-menu1.png";
import ChickenMenu2 from "../../assets/images/shapes/chicken-menu2.png";

const AboutUs = () => {
  const [activeTab, setActiveTab] = useState("food-tab1");

  useEffect(() => {
    AOS.init({ duration: 1500, offset: 50 });
  }, []);

  return (
    <>
      {/* Page Banner Section */}
      <PageBanner title="Menu pizza" />

      <section className="about-us-area pt-130 rpt-100 pb-150 rpb-60 rel z-1">
        <div className="container">
          <div className="row align-items-end">
            {/* Image Section */}
            <div className="col-lg-6">
              <div className="about-image-part style-two mb-30 rmb-55" data-aos="fade-left">
                <img src={Gril} alt="About Food" />
                <div className="quality-food" style={{ backgroundImage: `url(${StarYellow})` }}>
                  <span className="for-border"></span>
                  <span className="text">
                    quality <br /> food
                  </span>
                </div>
              </div>
            </div>

            {/* Text Content */}
            <AboutDetails 
              title="The Amazing & Quality Food for Your Good Health" 
              description="Welcome to our restaurant, where culinary excellence meets warm hospitality in every dish we serve. Nestled in the heart of City Name, our eatery invites you on a journey." 
            />
          </div>
        </div>
        <span className="about-bg-text">Roasted chicken</span>
      </section>

      <HeadlineBurger />

      <section className="restaurant-menu-area pb-100 rpb-70 rel z-1">
        <div className="container container-1050">
          {/* Section Title */}
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-9">
              <div className="section-title text-center mb-50" data-aos="fade-up" data-aos-duration="1500" data-aos-offset="50">
                <span className="sub-title mb-5">Popular Menu</span>
                <h2>We provide exclusive food based on USA. Explore our popular food.</h2>
              </div>
            </div>
          </div>

          {/* Tabs Navigation */}
          <ul className="nav food-menu-tab mb-40" role="tablist" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1500" data-aos-offset="50">
            {GrillData.map((category) => (
              <li key={category.id}>
                <button
                  className={`nav-link ${activeTab === category.id ? "active" : ""}`}
                  onClick={() => setActiveTab(category.id)}
                >
                  <i className={category.icon}></i>
                  <span>{category.category}</span>
                </button>
              </li>
            ))}
          </ul>

          {/* Tab Content */}
          <div className="food-menu-tab-content tab-content">
            {GrillData.map((category) => (
              <div key={category.id} className={`tab-pane fade ${activeTab === category.id ? "show active" : ""}`} id={category.id}>
                <div className="row gap-90">
                  {category.items.map((item, index) => (
                    <div className="col-lg-6 pb-30" key={index}>
                      <div className="food-menu-item style-two">
                        <div className="image">
                          <img src={item.image} alt={item.name} />
                        </div>
                        <div className="content">
                          <h5>
                            <span className="title">{item.name}</span>
                            <span className="dots"></span>
                            <span className="price">{item.price}</span>
                          </h5>
                          <p>{item.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

          </div>
        </div>
        <div className="testimonials-shapes">
            <div className="shape one">
                <img src={ChickenMenu1} alt="Shape" />
            </div>
            <div className="shape two">
                <img src={ChickenMenu2} alt="Shape"/>
            </div>
        </div>
      </section>

      <OfferCards />
    </>
  );
};

export default AboutUs;
