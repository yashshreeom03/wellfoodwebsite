import React from "react";
import heroShape from "../../assets/images/shapes/hero-shape4.png";
import tomato from "../../assets/images/shapes/tomato.png";
import author1 from "../../assets/images/testimonials/author1.png";
import author2 from "../../assets/images/testimonials/author2.png";
import author3 from "../../assets/images/testimonials/author3.png";

const testimonials = [
  {
    text: "Renowned for its versatility in the kitchen, Red King Crab can be prepared in various ways, from simple steaming or boiling to elaborate preparations such as grilling incorporating.",
    authorImg: author1,
    name: "Steven H. Paxson",
    position: "CEO & Founder",
    delay: 0,
  },
  {
    text: "Renowned for its versatility in the kitchen, Red King Crab can be prepared in various ways, from simple steaming or boiling to elaborate preparations such as grilling incorporating.",
    authorImg: author2,
    name: "Steven H. Paxson",
    position: "CEO & Founder",
    delay: 50,
  },
  {
    text: "Renowned for its versatility in the kitchen, Red King Crab can be prepared in various ways, from simple steaming or boiling to elaborate preparations such as grilling incorporating.",
    authorImg: author3,
    name: "Steven H. Paxson",
    position: "CEO & Founder",
    delay: 100,
  },
  {
    text: "Renowned for its versatility in the kitchen, Red King Crab can be prepared in various ways, from simple steaming or boiling to elaborate preparations such as grilling incorporating.",
    authorImg: author1,
    name: "Steven H. Paxson",
    position: "CEO & Founder",
    delay: 150,
  },
  {
    text: "Renowned for its versatility in the kitchen, Red King Crab can be prepared in various ways, from simple steaming or boiling to elaborate preparations such as grilling incorporating.",
    authorImg: author2,
    name: "Steven H. Paxson",
    position: "CEO & Founder",
    delay: 200,
  },
  {
    text: "Renowned for its versatility in the kitchen, Red King Crab can be prepared in various ways, from simple steaming or boiling to elaborate preparations such as grilling incorporating.",
    authorImg: author3,
    name: "Steven H. Paxson",
    position: "CEO & Founder",
    delay: 250,
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials-area bgc-black pt-105 rpt-85 pb-130 rpb-100 rel z-1">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-8">
            <div className="section-title text-white text-center mb-50" data-aos="fade-up" data-aos-duration="1500" data-aos-offset="50">
              <span className="sub-title mb-5">Customer Feedback</span>
              <h2>What our happy customers say</h2>
            </div>
          </div>
        </div>

        {/* Testimonials Slider */}
        <div className="testimonials-active">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-item"
              data-aos="fade-up"
              data-aos-delay={testimonial.delay}
              data-aos-duration="1500"
              data-aos-offset="50"
            >
              <div className="quote"><i className="flaticon-quote"></i></div>
              <div className="text">{testimonial.text}</div>
              <div className="author">
                <img src={testimonial.authorImg} alt={testimonial.name} />
                <div className="description">
                  <h5>{testimonial.name}</h5>
                  <span>{testimonial.position}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Shapes */}
      <div className="testimonials-shapes">
        <div className="shape one"><img src={heroShape} alt="Shape" /></div>
        <div className="shape two"><img src={tomato} alt="Shape" /></div>
      </div>
    </section>
  );
};

export default Testimonials;
