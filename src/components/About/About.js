import React from 'react';
import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';

const About = () => {
    return (
        <>
            <AboutDiv id="about">
                <AboutWrapper>
                    <AboutHeader >Our Story</AboutHeader>
                    <AboutP>
                        <p>Kula has been serving Londoners our famous Crepes, Waffles, Pancakes, Breakfast and
                            Brunch for over 10 years from our cosy family-owned creperie in the heart of St Christopher’s
                            place at Marylebone, London. We are open every day from morning to night with a menu which will take
                            you around the globe with our legendary English breakfast and Indian Karak Chai to American pancakes, French crepes and Belgian waffles.</p>
                    </AboutP>
                    <AboutButton to='/'>Order Online</AboutButton>
                    <AboutP>
                        <p>Kula is more than just a creperie. Our menu caters for all tastes, all day. Barista coffee,
                            sweet and savoury snacks, salads, Juices, Milkshakes, Smoothies and main courses sitting alongside our famous patisserie and ice cream counters.
                            Ample seating outside provides fabulous views to Selfridges and across the piazza; so come along,
                            grab a seat and unwind whilst enjoying something delicious from our daily menu.</p>
                    </AboutP>
                </AboutWrapper>
            </AboutDiv>
        </>
    )
}

export default About


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
margin: 20px 100px;

@media screen and (max-width:768px){
    margin: 20px;
}
`;


const AboutHeader = styled.h1`
color: #000;
font-size: 50px;

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
color: #010606;
font-size: 16px;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;

&:hover{
    transition: all 0.2 ease-in-out;
    background: #fff;
    color: #010606;
    
}
`;