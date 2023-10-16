import React from "react";
import styled from "styled-components";
import tiramisu from "../../images/tiramisu.jpg";
import Card from "../Card.js";
import {
  testimonialsOne,
  testimonialsTwo,
  testimonialsThree,
} from "./TestimonialsData";

const Testimonials = () => {
  return (
    <>
      <TDiv>
        <TWrapper>
          <Card {...testimonialsOne} />
          <Card {...testimonialsTwo} />
          <Card {...testimonialsThree} />
        </TWrapper>
      </TDiv>
    </>
  );
};

export default Testimonials;

const TDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 800px;
  background-image: url(${tiramisu});
  background-size: cover;
`;

const TWrapper = styled.div`
  display: flex;
  padding: 50px;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    padding: 20px 0;
  }
`;
