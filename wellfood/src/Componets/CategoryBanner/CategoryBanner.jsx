import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import categoryBannerOne from "../../assets/images/banner/category-banner-two1.png";
import categoryBannerTwo from "../../assets/images/banner/category-banner-two2.png";
import foodImageOne from "../../assets/images/banner/category-banner-food1.png";
import foodImageTwo from "../../assets/images/banner/category-banner-food2.png";
import foodImageThree from "../../assets/images/banner/category-banner-food3.png";

const CategoryBanner = () => {
  useEffect(() => {
    AOS.init({ duration: 1500, offset: 50 });
  }, []);

  return (
    <div className="category-banner-area-two">
      <div className="container-fluid">
        <div className="row row-cols-lg-3 row-cols-sm-2 row-cols-1 justify-content-center">
          {/* First Banner */}
          <div className="col" data-aos="fade-up">
            <div
              className="category-banner-item style-two"
              style={{ backgroundImage: `url(${categoryBannerOne})` }}
            >
              <span className="price">only $59</span>
              <h3>SPECIALTY Beef steak</h3>
              <div className="ratting">
                {[...Array(5)].map((_, i) => (
                  <i className="fas fa-star" key={i}></i>
                ))}
                <span>(5k)</span>
              </div>
              <a href="shop.html" className="theme-btn style-two">
                Order now <i className="far fa-arrow-alt-right"></i>
              </a>
              <div className="food-image">
                <img src={foodImageOne} alt="Beef steak" />
              </div>
            </div>
          </div>

          {/* Second Banner */}
          <div className="col" data-aos="fade-up" data-aos-delay="50">
            <div
              className="category-banner-item style-two color-black"
              style={{ backgroundImage: `url(${categoryBannerTwo})` }}
            >
              <span className="price">only $43</span>
              <h3>SPECIALTY Italian pizza</h3>
              <div className="ratting">
                {[...Array(5)].map((_, i) => (
                  <i className="fas fa-star" key={i}></i>
                ))}
                <span>(5k)</span>
              </div>
              <a href="shop.html" className="theme-btn">
                Order now <i className="far fa-arrow-alt-right"></i>
              </a>
              <div className="food-image">
                <img src={foodImageTwo} alt="Italian pizza" />
              </div>
            </div>
          </div>

          {/* Third Banner */}
          <div className="col" data-aos="fade-up" data-aos-delay="100">
            <div
              className="category-banner-item style-two"
              style={{ backgroundImage: `url(${categoryBannerOne})` }}
            >
              <span className="price">only $35</span>
              <h3>Vegetable Burger</h3>
              <div className="ratting">
                {[...Array(5)].map((_, i) => (
                  <i className="fas fa-star" key={i}></i>
                ))}
                <span>(5k)</span>
              </div>
              <a href="shop.html" className="theme-btn style-two">
                Order now <i className="far fa-arrow-alt-right"></i>
              </a>
              <div className="food-image">
                <img src={foodImageThree} alt="Vegetable burger" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryBanner;
