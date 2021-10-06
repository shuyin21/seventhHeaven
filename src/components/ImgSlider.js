import React from 'react';

import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import pancake from '../images/pancake.jpg';
import caro1 from '../images/caro1.jpg';
import dessert from '../images/dessert.jpg';





const ImgSlider = (props) => {

    let settings = {
        dots: false,
        infinite: true,
        speed: 5000,
        slidesToShow: 1,
        cssEase: 'ease-in-out',
        fade: true,
        slidesToScroll: 1,
        autoplay: true,
        loop: true,


    };

    return (
        <Carousel {...settings} >

            <Wrap>
                <ImgHolder>
                    <Img src={dessert} />
                </ImgHolder>
            </Wrap>
            <Wrap>
                <ImgHolder>
                    <Img src={caro1} />
                </ImgHolder>
            </Wrap>
            <Wrap>
                <ImgHolder>
                    <Img src={pancake} />
                </ImgHolder>
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
margin-bottom: 20px;

@media screen and(max-width: 500px){
        
            height:400px;
            width:100%;
        }



    &:hover {
        padding: 0;
        border: 4px solid rgba(249, 249, 249, 0.8);
        transition-duration: 300ms;
    }

`;



const ImgHolder = styled.div`

border-radius: 4px;
    box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px, rgb(0 0 0  / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    display: block;
    position: relative;
    padding: 4px;
`;

const Img = styled.img`

width: 100%;
        height:100%;
        object-fit: cover;

        animation: imgscale 50s infinite ease-in-out;
        

        @keyframes imgscale{
        0%{
            transform: scale(1)
        }  
       
        100%{
            transform:scale(1.7);
        }
        }

@media screen and (max-width:768px){
    
    height:370px;
    animation: none;
}

`;


export default ImgSlider;


