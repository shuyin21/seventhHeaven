import React, { useState } from "react";
import styled from "styled-components";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import About from "../components/About/About";
import Testimonials from "../components/Testimonials/Testimonials";
import { testimonialsOne } from "../components/Testimonials/TestimonialsData";
import Location from "../components/Location/Location";
import Gallery from "../components/Gallery/Gallery";
import Menu from "./menu";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <MainWrap>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <About />
      <Menu />
      <Testimonials {...testimonialsOne} />
      <Location />
      <Gallery />
      <Footer />
    </MainWrap>
  );
};

export default Home;

const MainWrap = styled.div`
  width: 100%;
`;
