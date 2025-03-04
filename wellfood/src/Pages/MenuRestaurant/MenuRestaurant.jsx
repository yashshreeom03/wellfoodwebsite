import React, { useState } from "react";
import PageBanner from "../../Componets/PageBanner/PageBanner";
import HeadlineBurger from "../../Componets/HeadlineArea/HeadlineBurger";
import aboutImage from "../../assets/images/about/menu-restaurant.png"; 
import RestaurantData from "../../Componets/Data/RestaurantData"
import CategoryBanner from "../../Componets/CategoryBanner/CategoryBanner"
import PopularBurger from "../../Componets/PopularBurger/PopularBurger"
import AboutDetails from "../../Componets/AboutDetails/AboutDetails"

const MenuPage = ({ 
  experienceYears = 25, 
}) => {
  const [activeTab, setActiveTab] = useState("food-tab1");

  return (
    <div>
      {/* Page Banner Section */}
      <PageBanner title="Menu Fried Chicken" />

      {/* About Us Section */}
      <section className="about-us-area pt-130 rpt-100 pb-90 rpb-60 rel z-1">
        <div className="container">
          <div className="row align-items-end">
            {/* Image Section */}
            <div className="col-lg-6">
              <div 
                className="about-restaurant-page rel mb-30 rmb-55"
                data-aos="fade-left"
                data-aos-duration="1500"
                data-aos-offset="50"
              >
                <img src={aboutImage} alt="Menu Restaurant" />
                <div className="experience-year">
                  <span className="years">{experienceYears}</span>
                  Years of experience in restaurant services
                </div>
              </div>
            </div>

            {/* Text Content */}
            <AboutDetails 
              title="the amazing & Quality food for your good health" 
              description="Welcome too restaurant, where culinary excellence meets warm hospitality in every dish we serve. Nestled in the heart of City Name our eatery invites you on a journey" 
            />
          </div>
        </div>
      </section>

      <HeadlineBurger />

      <section className="restaurant-menu-area pb-100 rpb-70 rel z-1">
        <div className="container container-1050">
          {/* Section Title */}
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-9">
              <div
                className="section-title text-center mb-50"
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-offset="50"
              >
                <span className="sub-title mb-5">Popular Menu</span>
                <h2>
                  We provide exclusive food based on USA. Explore our popular food.
                </h2>
              </div>
            </div>
          </div>

          {/* Tabs Navigation */}
          <ul
            className="nav food-menu-tab mb-40"
            role="tablist"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1500"
            data-aos-offset="50"
          >
            {RestaurantData.map((category) => (
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
            {RestaurantData.map((category) => (
              <div
                key={category.id}
                className={`tab-pane fade ${activeTab === category.id ? "show active" : ""}`}
                id={category.id}
              >
                <div className="row gap-90">
                 
                    <div className="col-lg-6 pb-30" >
                    {category.items.map((item, index) => (
                      <div className="food-menu-item style-two" key={index}>
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
                      ))}
                    </div>
                    <div className="col-lg-6 pb-30" >
                    {category.items.map((item, index) => (
                      <div className="food-menu-item style-two" key={index}>
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
                      ))}
                    </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CategoryBanner />

      <PopularBurger />

    </div>
  );
};

export default MenuPage;
