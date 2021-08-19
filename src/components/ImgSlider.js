import { useState, useEffect } from 'react';

import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import cafe1 from '../images/cafe-1.jpg';
import cafe2 from '../images/cafe-2.jpg';
import cafe3 from '../images/cafe-3.jpg';
import cafe4 from '../images/cafe-4.jpg';
import cafe5 from '../images/cafe-5.jpg';
import cafe6 from '../images/cafe-6.jpg';



const ImgSlider = (props) => {

    let settings = {
        dots: false,
        infinite: true,
        speed: 5000,
        slidesToShow: 1,
        cssEase: 'ease',
        fade: true,
        slidesToScroll: 1,
        autoplay: true,

    };

    const [Mobile, setMobile] = useState(false);

    function handleResize() {

        if (window.innerWidth < 500) { setMobile(true) }
        else { setMobile(false) }

    }

    useEffect(() => {
        handleResize();

        window.addEventListener('resize', handleResize)
    })



    const mobileCheck = Mobile;
    return (
        <Carousel {...settings} >
            <Wrap>
                <a>
                    <img src={mobileCheck ? cafe4 : cafe1} alt='' />
                </a>
            </Wrap>
            <Wrap>
                <a>
                    <img src={mobileCheck ? cafe5 : cafe2} alt='' />
                </a>
            </Wrap>
            <Wrap>
                <a>
                    <img src={mobileCheck ? cafe6 : cafe3} alt='' />
                </a>
            </Wrap>


        </Carousel>
    )
}
const Carousel = styled(Slider)`
margin-top:0px;





`;

const Wrap = styled.div`
border-radius: 4px;
cursor: pointer;
position: relative;

@media screen and(max-width: 500px){
        img{
            height:400px;
            width:480px;
        }}

a{
    border-radius: 4px;
    box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px, rgb(0 0 0  / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    display: block;
    position: relative;
    padding: 4px;

    img {
        width: 100%;
        height:100%;
        
        
    }
   
}
    &:hover {
        padding: 0;
        border: 4px solid rgba(249, 249, 249, 0.8);
        transition-duration: 300ms;
    }

`;

export default ImgSlider;