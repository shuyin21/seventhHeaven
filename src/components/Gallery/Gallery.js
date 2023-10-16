import React from "react";
import styled from "styled-components";
import Tilt from "react-tilt";
import arancini from "../../images/arancini.jpg";
import pannacotta from "../../images/pannacotta.jpg";
import tiramisu from "../../images/tiramisu.jpg";
import fettucine from "../../images/fettucine.jpg";
import risotto from "../../images/risotto.jpg";
import burrata from "../../images/burrata.jpg";
import lamp from "../../images/lamp.jpg";
import pudding from "../../images/breadpudding.jpg";

const Gallery = () => {
  return (
    <>
      <GalleryContainer>
        <GalleryWrapper>
          <Tilt className="Tilt " options={tiltOptions} style={style}>
            <ImgHolder src={arancini} />
          </Tilt>
          <Tilt className="Tilt" options={tiltOptions} style={style}>
            <ImgHolder src={pannacotta} />
          </Tilt>
          <Tilt className="Tilt " options={tiltOptions} style={style}>
            <ImgHolder src={tiramisu} />
          </Tilt>
          <Tilt className="Tilt " options={tiltOptions} style={style}>
            <ImgHolder src={fettucine} />
          </Tilt>
          <Tilt className="Tilt " options={tiltOptions} style={style}>
            <ImgHolder src={risotto} />
          </Tilt>
          <Tilt className="Tilt " options={tiltOptions} style={style}>
            <ImgHolder src={burrata} />
          </Tilt>
          <Tilt className="Tilt " options={tiltOptions} style={style}>
            <ImgHolder src={lamp} />
          </Tilt>
          <Tilt className="Tilt " options={tiltOptions} style={style}>
            <ImgHolder src={pudding} />
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
