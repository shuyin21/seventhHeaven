import React, { useState } from 'react'
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';

import Footer from '../components/Footer';
import Instagram from '../components/instagram/Instagram';
import About from '../components/About/About';
import Testimonials from '../components/Testimonials/Testimonials';
import { testimonialsOne } from '../components/Testimonials/TestimonialsData';
import Location from '../components/Location/Location';
import Gallery from '../components/Gallery/Gallery';
import Menu from './menu';


const Home = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />

            <HeroSection />
            <About />

            <Instagram />
            <Menu />
            <Testimonials {...testimonialsOne} />

            <Location />
            <Gallery />

            <Footer />
        </>
    )
}

export default Home
