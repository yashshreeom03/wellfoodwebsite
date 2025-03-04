import React from "react";
import dish1 from "../../assets/images/dishes/dish1.png";
import dish2 from "../../assets/images/dishes/dish2.png";
import dish3 from "../../assets/images/dishes/dish3.png";
import dish4 from "../../assets/images/dishes/dish4.png";

const dishesData = [
  {
    id: 1,
    image: dish1,
    title: "Fresh Chicken Burger",
    price: "$25",
    oldPrice: "$50",
    link: "product-details.html",
  },
  {
    id: 2,
    image: dish2,
    title: "Pizza with Mushrooms",
    price: "$25",
    oldPrice: "$50",
    link: "product-details.html",
  },
  {
    id: 3,
    image: dish3,
    title: "Double Burger & Fries",
    price: "$25",
    oldPrice: "$50",
    link: "product-details.html",
  },
  {
    id: 4,
    image: dish4,
    title: "Fried Chicken French",
    price: "$25",
    oldPrice: "$50",
    link: "product-details.html",
  },
];

const Dishes = () => {
  return (
    <section className="dishes-area pt-130 rpt-100 rel z-1">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="section-title text-center mb-50" data-aos="fade-up" data-aos-duration="1500" data-aos-offset="50">
              <span className="sub-title mb-5">Popular Dishes</span>
              <h2>Explore Popular Menus</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          {dishesData.map((dish, index) => (
            <div
              className="col-xl-3 col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-delay={index * 50}
              data-aos-duration="1500"
              data-aos-offset="50"
              key={dish.id}
            >
              <div className="product-item-two">
                <div className="image">
                  <img src={dish.image} alt={dish.title} />
                </div>
                <div className="content">
                  <div className="ratting">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="fas fa-star"></i>
                    ))}
                    <span>(5k)</span>
                  </div>
                  <h5>
                    <a href={dish.link}>{dish.title}</a>
                  </h5>
                  <span className="price">
                    <del>{dish.oldPrice}</del> {dish.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Dishes;
