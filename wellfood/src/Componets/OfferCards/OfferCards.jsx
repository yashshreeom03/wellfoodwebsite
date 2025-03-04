import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Import Images
import goodFood from "../../assets/images/offer/good-food.png";
import offerCard1 from "../../assets/images/offer/offer-card1.png";
import offerCard2 from "../../assets/images/offer/offer-card2.png";
import offerCard3 from "../../assets/images/offer/offer-card3.png";
import offerCard4 from "../../assets/images/offer/offer-card4.png";
import offerCard5 from "../../assets/images/offer/offer-card5.png";

const offers = [
  { id: 1, title: "Burger", discount: "Hot", img: offerCard1, bgText: "Burger" },
  { id: 2, title: "Pizza", discount: "-10%", img: offerCard2, bgText: "Pizza" },
  { id: 3, title: "Hotdog", discount: "Hot", img: offerCard3, bgText: "Hotdog" },
  { id: 4, title: "Chickens", discount: "-15%", img: offerCard4, bgText: "Chickens" },
  { id: 5, title: "Seafood", discount: "Hot", img: offerCard5, bgText: "Seafood" },
];

const OfferCards = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <div className="offer-card-area">
      <div className="row no-gap row-cols-xxl-5 row-cols-xl-4 row-cols-lg-3 row-cols-sm-2 row-cols-1 justify-content-center">
        {offers.map((offer, index) => (
          <div
            key={offer.id}
            className="col"
            data-aos="fade-up"
            data-aos-delay={index * 50}
            data-aos-duration="1500"
            data-aos-offset="50"
          >
            <div className={`offer-card-item ${index % 2 === 1 ? "style-two" : ""}`}>
              <img src={goodFood} alt="Good Food" />
              <div className="badge">{offer.discount}</div>
              <div className="image">
                <img src={offer.img} alt={offer.title} />
              </div>
              <span className="title">{offer.title}</span>
              <span className="available-item">35+ {offer.title} menu items</span>
              <div className="bg-text">
                <span>{offer.bgText}</span> <span>{offer.bgText}</span> <span>{offer.bgText}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OfferCards;
