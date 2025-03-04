import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import chillies from "../../assets/images/shapes/chillies.png";
import tomato from "../../assets/images/shapes/tomato.png";

const HeadlineArea = () => {
  return (
    <div className="headline-area pt-120 rpt-90 rel z-1">
      <div className="marquee-wrap">
        {[...Array(3)].map((_, index) => (
          <div className="marquee-inner left" key={index}>
            <span className="marquee-item">Italian pizza</span>
            <span className="marquee-item">
              <FontAwesomeIcon icon={faStar} />
            </span>
            <span className="marquee-item">delicious foods</span>
            <span className="marquee-item">
              <FontAwesomeIcon icon={faStar} />
            </span>
            <span className="marquee-item">burger king</span>
            <span className="marquee-item">
              <FontAwesomeIcon icon={faStar} />
            </span>
          </div>
        ))}
      </div>

      <div className="headline-shapes">
        <div className="shape one">
          <img src={chillies} alt="Shape" />
        </div>
        <div className="shape two">
          <img src={tomato} alt="Shape" />
        </div>
      </div>
    </div>
  );
};

export default HeadlineArea;
