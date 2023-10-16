import React from "react";
import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

const About = () => {
  return (
    <>
      <AboutDiv id="about">
        <AboutWrapper>
          <AboutHeader>Our Story</AboutHeader>
          <AboutP>
            <p>
              Seventh Heaven, a cherished family-owned bistro located in the
              heart of bustling Piccadilly Circus, has been captivating
              Londoners for over a decade with our extraordinary menu. From the
              moment you step into our inviting restaurant, you'll embark on a
              culinary journey that explores a myriad of flavors. With a diverse
              selection of dishes to choose from, including delectable starters
              like Arancini and Bocconcini, mouthwatering main courses such as
              Beef Ragù Pappardelle and Vegan Milanese, and indulgent desserts
              like Tiramisu and Chocolate Bread & Butter Pudding, Seventh Heaven
              caters to every taste and craving. Join us in the vibrant heart of
              London and experience a world of culinary delights at Seventh
              Heaven.
            </p>
          </AboutP>
          <AboutButton to="/">Order Online</AboutButton>
        </AboutWrapper>
      </AboutDiv>
    </>
  );
};

export default About;

const AboutDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 100px 100px 20px;

  @media screen and (max-width: 768px) {
    margin: 100px 20px 20px;
  }
`;

const AboutHeader = styled.h1`
  color: #000;
  font-size: 30px;
  text-transform: uppercase;
  font-family: "Open Sans", sans-serif;
`;

const AboutP = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 20px 0;
  line-height: 1.8;
  font-weight: 500;
`;

const AboutButton = styled(LinkR)`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 10px 22px;
  color: white;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin: 20px 0 50px 0;
  border: solid 1px rgb(1, 191, 113);

  &:hover {
    transition: all 0.2 ease-in-out;
    background: white;
    color: rgb(1, 191, 113);
    border: solid 1px rgb(1, 191, 113);
  }
`;
