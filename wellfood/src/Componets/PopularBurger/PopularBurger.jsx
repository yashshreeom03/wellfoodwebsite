import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import burger1 from "../../assets/images/products/burger1.png";
import burger2 from "../../assets/images/products/burger2.png";
import burger3 from "../../assets/images/products/burger3.png";
import burger4 from "../../assets/images/products/burger4.png";

const burgerData = [
  { id: 1, name: "Vegetable Beef Burger", img: burger1, badge: "hot", oldPrice: 50, newPrice: 25 },
  { id: 2, name: "Beef Chicken Burger", img: burger2, badge: "-10%", oldPrice: 50, newPrice: 25 },
  { id: 3, name: "Black Bread Burger", img: burger3, badge: "", oldPrice: 50, newPrice: 25 },
  { id: 4, name: "Delicious Burger with Beef", img: burger4, badge: "new", oldPrice: 50, newPrice: 25 },
  { id: 5, name: "Vegetable Beef Burger", img: burger1, badge: "hot", oldPrice: 50, newPrice: 25 },
  { id: 6, name: "Beef Chicken Burger", img: burger2, badge: "-10%", oldPrice: 50, newPrice: 25 },
  { id: 7, name: "Black Bread Burger", img: burger3, badge: "", oldPrice: 50, newPrice: 25 },
];

const BurgerSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1500, offset: 50 });
  }, []);

  return (
    <section className="burger-area pt-100 rpt-70 pb-130 rpb-100 rel z-1">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="section-title text-center mb-50" data-aos="fade-up">
              <span className="sub-title mb-5">Popular Burger</span>
              <h2>Popular Delicious Burgers</h2>
            </div>
          </div>
        </div>
        <div className="pizza-active">
          {burgerData.map((burger, index) => (
            <div
              key={burger.id}
              className="product-item"
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              <div className="image">
                <img src={burger.img} alt={burger.name} />
                {burger.badge && <span className="pizza-badge">{burger.badge}</span>}
              </div>
              <div className="content">
                <div className="ratting">
                  {[...Array(5)].map((_, i) => (
                    <i className="fas fa-star" key={i}></i>
                  ))}
                  <span>(5k)</span>
                </div>
                <h5><a href="product-details.html">{burger.name}</a></h5>
                <span className="price">
                  <del>${burger.oldPrice}</del> ${burger.newPrice}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BurgerSection;
