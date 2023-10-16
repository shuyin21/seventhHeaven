import React from "react";
import styled from "styled-components";
import Tilt from "react-tilt";
import Banana from "../../images/GalleryImages/banana.jpg";
import Blueberry from "../../images/GalleryImages/blueberrys.jpg";
import cake from "../../images/GalleryImages/cake.jpg";
import crepe from "../../images/GalleryImages/crepe.jpg";
import iceCream from "../../images/GalleryImages/iceCream.jpg";
import oreo from "../../images/GalleryImages/oreo.jpg";
import salad from "../../images/GalleryImages/salad.jpg";
import waffle from "../../images/GalleryImages/waffle.jpg";

const Gallery = () => {
  return (
    <>
      <GalleryContainer>
        <GalleryWrapper>
          <Tilt className="Tilt " options={tiltOptions} style={style}>
            <ImgHolder src={Banana} />
          </Tilt>
          <Tilt className="Tilt" options={tiltOptions} style={style}>
            <ImgHolder src={Blueberry} />
          </Tilt>
          <Tilt className="Tilt " options={tiltOptions} style={style}>
            <ImgHolder src={cake} />
          </Tilt>
          <Tilt className="Tilt " options={tiltOptions} style={style}>
            <ImgHolder src={crepe} />
          </Tilt>
          <Tilt className="Tilt " options={tiltOptions} style={style}>
            <ImgHolder src={iceCream} />
          </Tilt>
          <Tilt className="Tilt " options={tiltOptions} style={style}>
            <ImgHolder src={oreo} />
          </Tilt>
          <Tilt className="Tilt " options={tiltOptions} style={style}>
            <ImgHolder src={salad} />
          </Tilt>
          <Tilt className="Tilt " options={tiltOptions} style={style}>
            <ImgHolder src={waffle} />
          </Tilt>
        </GalleryWrapper>
      </GalleryContainer>
    </>
  );
};

export default Gallery;

const GalleryContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 20vh;
  width: 100%;
  background-color: #fff;
  margin: 0;
`;

const GalleryWrapper = styled.div`
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  grid-template-rows: 50% 50%;
  width: 100vw;
  min-height: 80vh;
  margin: 5% 20px;

  @media screen and (max-width: 1200px) {
    grid-template-columns: 33% 33% 33%;
    grid-template-rows: 33% 33% 33%;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 100%;
    grid-template-rows: 10%;
    margin: 0;
  }
`;

const ImgHolder = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const style = {
  margin: 20,
};

const tiltOptions = {
  max: 25,
  scale: 1,
};
