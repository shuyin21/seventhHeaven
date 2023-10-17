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
  width:100%;
  display: flex;
  postion: relative;
  justify-content: center;
  align-items: center;
  height: 90vh;
  z-index: 1;

  @media screen and (max-width: 840px) {
    height: 50vh;
  }

  :before {
    content: "";
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
  }

  /* Add :before style */
`;

const HeroBg = styled.div`
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
`;
