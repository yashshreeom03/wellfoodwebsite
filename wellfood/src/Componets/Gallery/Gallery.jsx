import React from "react";
import gallery1 from "../../assets/images/gallery/gallery1.png";
import gallery2 from "../../assets/images/gallery/gallery2.png";
import gallery3 from "../../assets/images/gallery/gallery3.png";

const galleryItems = [
  { image: gallery1, title: "Spicy Awesome Pizza", category: "Burger, Hamburger" },
  { image: gallery2, title: "Spicy Awesome Pizza", category: "Burger, Hamburger" },
  { image: gallery3, title: "Spicy Awesome Pizza", category: "Burger, Hamburger" },
];

const Gallery = () => {
  return (
    <div className="gallery-area rel z-1">
      <div className="container-fluid">
        <div className="row justify-content-center">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="col-xl-4 col-sm-6"
              data-aos="fade-up"
              data-aos-delay={index * 50}
              data-aos-duration="1500"
              data-aos-offset="50"
            >
              <div className="gallery-item">
                <div className="gallery-image">
                  <img src={item.image} alt="Gallery" />
                </div>
                <div className="gallery-content">
                  <h5>{item.title}</h5>
                  <span className="category">{item.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
