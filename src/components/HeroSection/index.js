import styled from "styled-components";
import ImgSlider from "../ImgSlider";

const HeroSection = () => {
  return (
    <HeroContainer id="home">
      <HeroBg>
        <ImgSlider />
      </HeroBg>
    </HeroContainer>
  );
};

export default HeroSection;

const HeroContainer = styled.div`
  ${"" /* background: #0c0c0c; */}
  display: flex;
  postion: relative;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 95vh;
  z-index: 1;

  @media screen and (max-width: 840px) {
    height: 50vh;
  }

  @media screen and (max-width: 768px) {
    height: 40vh;
  }

  @media screen and (max-width: 400px) {
    height: 400px;
  }

  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    /* background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%,
    rgba(0,0,0,0.6) 100%),
    linear-gradient(180deg, rgba(0,0,0,0.2)0%, transparent 100%); */
    z-index: 2;
  }

  /* Add :before style */
`;

const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;

  @media screen and (max-width: 1025px) {
    height: 100%;
    margin-top: 70px;
  }

  ${
    "" /* @media screen and (min-width: 900px) and (max-width: 1025px) {
    height: 320px;
    margin-top: 70px;
  } */
  }
`;
