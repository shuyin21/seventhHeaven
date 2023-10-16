import React from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import tiramisu from "../images/tiramisu.jpg";
import fettucine from "../images/fettucine.jpg";
import arancini from "../images/arancini.jpg";

const ImgSlider = (props) => {
  let settings = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 1,
    cssEase: "ease-in-out",
    fade: true,
    slidesToScroll: 1,
    autoplay: true,
    loop: true,
  };

  return (
    <Carousel {...settings}>
      <Wrap>
        <ImgHolder>
          <Img src={arancini} />
        </ImgHolder>
      </Wrap>
      <Wrap>
        <ImgHolder>
          <Img src={fettucine} />
        </ImgHolder>
      </Wrap>
      <Wrap>
        <ImgHolder>
          <Img src={tiramisu} />
        </ImgHolder>
      </Wrap>
    </Carousel>
  );
};

export default ImgSlider;

const Carousel = styled(Slider)`
  margin-top: 0px;
  position: relative;
`;

const Wrap = styled.div`
  border-radius: 4px;
  cursor: pointer;
  position: relative;
  margin-bottom: 20px;

  @media screen and(max-width: 500px) {
    height: 100%;
    width: 100%;
  }

  &:hover {
    padding: 0;
    border: 4px solid rgba(249, 249, 249, 0.8);
    transition-duration: 300ms;
  }
`;

const ImgHolder = styled.div`
  border-radius: 4px;
  cursor: pointer;
  display: block;
  position: relative;
  padding: 4px;
  height: 100%;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  animation: imgscale 50s infinite ease-in-out;

  @keyframes imgscale {
    0% {
      transform: scale(1.1);
    }

    100% {
      transform: scale(1.5);
    }
  }

  @media screen and (max-width: 768px) {
    height: 320px;
    animation: none;
  }
`;
