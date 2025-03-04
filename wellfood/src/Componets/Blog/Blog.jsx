import React from "react";
import blog1 from "../../assets/images/blog/blog1.png";
import blog2 from "../../assets/images/blog/blog2.png";
import blog3 from "../../assets/images/blog/blog3.png";

const blogPosts = [
  {
    id: 1,
    image: blog1,
    category: "Quality Food",
    date: "March 25, 2024",
    comments: 5,
    title: "Culinary Chronicles Exploring Gastronomic Wonders at FoodKing Restaurant",
    description: "Restaurant where culinary excellence meets hospitality in every dish we serve settled in the heart",
    link: "blog-details.html",
  },
  {
    id: 2,
    image: blog2,
    category: "Quality Food",
    date: "March 25, 2024",
    comments: 5,
    title: "Culinary Chronicles Exploring Gastronomic Wonders at FoodKing Restaurant",
    description: "Restaurant where culinary excellence meets hospitality in every dish we serve settled in the heart",
    link: "blog-details.html",
  },
  {
    id: 3,
    image: blog3,
    category: "Quality Food",
    date: "March 25, 2024",
    comments: 5,
    title: "Culinary Chronicles Exploring Gastronomic Wonders at FoodKing Restaurant",
    description: "Restaurant where culinary excellence meets hospitality in every dish we serve settled in the heart",
    link: "blog-details.html",
  },
];

const Blog = () => {
  return (
    <section className="blog-area pt-100 rpt-70 pb-90 rpb-60 rel z-1">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="section-title text-center mb-50" data-aos="fade-up" data-aos-duration="1500" data-aos-offset="50">
              <span className="sub-title mb-5">Latest News & Blog</span>
              <h2>Get Every Single Update Latest</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          {blogPosts.map((post, index) => (
            <div
              className="col-xl-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={index * 50}
              data-aos-duration="1500"
              data-aos-offset="50"
              key={post.id}
            >
              <div className="blog-item">
                <div className="image">
                  <img src={post.image} alt="Blog" />
                  <ul className="blog-meta">
                    <li>
                      <a href="#">{post.category}</a>
                    </li>
                    <li>
                      <a href="#">{post.date}</a>
                    </li>
                    <li>
                      <a href="#">comments ({post.comments})</a>
                    </li>
                  </ul>
                </div>
                <div className="content">
                  <h4>
                    <a href={post.link}>{post.title}</a>
                  </h4>
                  <p>{post.description}</p>
                  <a href={post.link} className="read-more">
                    Read more <i className="far fa-arrow-alt-right"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
