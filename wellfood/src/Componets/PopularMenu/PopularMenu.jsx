import React from "react";
import foodImage from "../../assets/images/food/food1.png";

const foodItems = [
  { name: "Red King Crab", desc: "Native to the icy waters of the Pacific", price: "$25" },
  { name: "Alaskan King Crab", desc: "Native to the icy waters of the Pacific", price: "$10" },
  { name: "Pizza", desc: "Native to the icy waters of the Pacific", price: "$22" },
  { name: "Hamburger", desc: "Native to the icy waters of the Pacific", price: "$43" },
  { name: "Chicken Soup", desc: "Native to the icy waters of the Pacific", price: "$77" },
];

const PopularMenu = () => {
  return (
    <section className="popular-menu-area pt-105 rpt-85 pb-100 rpb-70 rel z-1">
      <div className="container">
        {/* Section Title */}
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-8">
            <div
              className="section-title text-center mb-50"
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-offset="50"
            >
              <span className="sub-title mb-5">Popular Menu</span>
              <h2>We provide exclusive food based on the USA. Explore our popular food</h2>
            </div>
          </div>
        </div>

        {/* Food Items */}
        <div className="row justify-content-center">
          {[0, 1, 2].map((column, colIndex) => (
            <div
              key={colIndex}
              className={`col-xl-4 col-lg-6 z-${3 - colIndex}`}
              data-aos="fade-up"
              data-aos-delay={colIndex * 50}
              data-aos-duration="1500"
              data-aos-offset="50"
            >
              {foodItems.map((food, index) => (
                <div key={index} className={`food-item ${index === foodItems.length - 1 ? "mb-30" : ""}`}>
                  <div className="content">
                    <div className="name-desc">
                      <h5>{food.name}</h5>
                      <p>{food.desc}</p>
                    </div>
                    <div className="price">
                      <span>{food.price}</span>
                    </div>
                  </div>
                  <div className="image">
                    <img src={foodImage} alt={food.name} />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularMenu;
