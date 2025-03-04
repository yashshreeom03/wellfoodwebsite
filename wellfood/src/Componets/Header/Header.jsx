import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logos/logo.png";


const Header = () => {
  const [searchVisible, setSearchVisible] = useState(false);

  return (
    <header className="main-header white-menu menu-absolute">
      <div className="header-upper">
        <div className="container-fluid clearfix">
          <div className="header-inner rel d-flex align-items-center">
            {/* Logo Section */}
            <div className="logo-outer">
              <div className="logo">
                <Link to="/">
                  <img src={logo} alt="Logo" title="Logo" />
                </Link>
              </div>
            </div>

            {/* Navigation */}
            <div className="nav-outer ms-lg-5 ps-xxl-4 clearfix">
              <nav className="main-menu navbar-expand-lg">
                <div className="navbar-header py-10">
                  <div className="mobile-logo">
                    <Link to="/">
                      <img src={logo} alt="Logo" title="Logo" />
                    </Link>
                  </div>
                  <button type="button" className="navbar-toggle" data-bs-toggle="collapse" data-bs-target=".navbar-collapse">
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                </div>

                {/* Dropdown Menu */}
                <div className="navbar-collapse collapse clearfix">
                  <ul className="navigation clearfix">
                    <li><Link to="/">Home</Link></li>

                    <li className="dropdown"> 
                      <Link to="#">
                        Menu 
                      </Link>
                      <ul>
                        <li><Link to="/MenuRestaurant">Menu Restaurant</Link></li>
                        <li><Link to="/MenuPizza">Menu Pizza</Link></li>
                        <li><Link to="/MenuGrill">Menu Grill</Link></li>
                        <li><Link to="/MenuBurger">Menu Burger</Link></li>
                        <li><Link to="/menu-sea-food">Menu Sea Food</Link></li>
                        <li><Link to="/menu-chicken">Menu Chicken</Link></li>
                      </ul>
                    </li>

                    <li className="dropdown">
                      <Link to="#">
                        Pages 
                      </Link>
                      <ul>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/history">Our History</Link></li>
                        <li><Link to="/faq">FAQs</Link></li>
                        <li className="dropdown">
                          <Link to="#">
                            Chefs
                          </Link>
                          <ul>
                            <li><Link to="/chefs">Our Chefs</Link></li>
                            <li><Link to="/chef-details">Chef Details</Link></li>
                          </ul>
                        </li>
                        <li><Link to="/gallery">Gallery</Link></li>
                      </ul>
                    </li>

                    <li className="dropdown">
                      <Link to="#">
                        Blog
                      </Link>
                      <ul>
                        <li><Link to="/blog">Blog Standard</Link></li>
                        <li><Link to="/blog-details">Blog Details</Link></li>
                      </ul>
                    </li>

                    <li className="dropdown">
                      <Link to="#">
                        Shop 
                      </Link>
                      <ul>
                        <li><Link to="/shop">Products</Link></li>
                        <li><Link to="/product-details">Product Details</Link></li>
                        <li><Link to="/cart">Shopping Cart</Link></li>
                        <li><Link to="/checkout">Checkout Page</Link></li>
                      </ul>
                    </li>

                    <li><Link to="/contact">Contact</Link></li>
                  </ul>
                </div>
              </nav>
            </div>

            {/* Contact Section */}
            <div className="header-number">
            <i class="far fa-phone"></i> Call : <a href="tel:+88012345688">+880 123 456 88</a>
            </div>

            {/* Search Bar */}
            <div className="nav-search py-10">
              <button className="far fa-search" onClick={() => setSearchVisible(!searchVisible)}>
              </button>
              {searchVisible && (
                <form action="#">
                  <input type="text" placeholder="Search" className="searchbox" required />
                  <button type="submit" class="searchbutton far fa-search"></button>
                </form>
              )}
            </div>

            {/* Cart & Buttons */}
            <div className="menu-btns">
              <button>
                <i class="far fa-shopping-cart"></i> <span>2</span>
              </button>
              <Link to="/contact" className="theme-btn">
                Book now <i className="far fa-arrow-alt-right"></i>
              </Link>
              <div className="menu-sidebar">
                <button className="bg-transparent"></button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-lines">
          <span></span><span></span>
          <span></span><span></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
