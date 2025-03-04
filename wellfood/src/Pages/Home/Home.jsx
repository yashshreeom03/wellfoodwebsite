import React from "react";
import Hero from "../../Componets/Hero/hero"; 
import HeadlineArea from "../../Componets/HeadlineArea/HeadlineArea"; 
import HeadlineMarquee from "../../Componets/HeadlineArea/HeadlineMarquee"; 
import About from "../../Componets/About/About"; 
import OfferCards from "../../Componets/OfferCards/OfferCards"; 
import SpecialOffer from "../../Componets/SpecialOffer/SpecialOffer"; 
import PopularMenu from "../../Componets/PopularMenu/PopularMenu"; 
import Gallery from "../../Componets/Gallery/Gallery"; 
import ChooseUs from "../../Componets/ChooseUs/ChooseUs"; 
import Testimonials from "../../Componets/Testimonials/Testimonials"; 
import CTA from "../../Componets/CTA/CTA"; 
import Dishes from "../../Componets/Dishes/Dishes"; 
import Blog from "../../Componets/Blog/Blog"; 

const Home = () => {
  return (
    <>
      
      <Hero />
      <HeadlineArea />
      <About />
      <OfferCards />
      <SpecialOffer />
      <HeadlineArea />
      <PopularMenu />
      <Gallery />
      <ChooseUs />
      <HeadlineMarquee/>
      <Testimonials/>
      <CTA/>
      <Dishes/>
      <Blog/>
    </>
  );
};

export default Home;
