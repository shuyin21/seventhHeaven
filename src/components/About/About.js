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
                        <p>Kula, a beloved family-owned creperie, has been delighting Londoners for over a decade with our renowned selection of Crepes, Waffles, Pancakes, Breakfast, and Brunch. Located in the heart of St. Christopher's Place in Marylebone, London, our cozy establishment welcomes you every day from morning until night.

Our diverse menu takes you on a culinary journey around the world, offering a delightful fusion of flavors. From our iconic English breakfast and aromatic Indian Karak Chai to fluffy American pancakes, delicate French crepes, and indulgent Belgian waffles, Kula has something to satisfy every palate. Join us for a taste of global excellence right here in London.</p>
                    </AboutP>
                    <AboutButton to='/'>Order Online</AboutButton>
                    <AboutP>
                        <p>At Kula, we're not just a creperie; we're a culinary destination that caters to diverse tastes throughout the day. Our extensive menu encompasses a wide range of offerings, including barista coffee, delectable sweet and savory snacks, fresh salads, refreshing juices, indulgent milkshakes, healthy smoothies, and hearty main courses. All of this is complemented by our famous patisserie and ice cream counters.

If you choose to dine with us, you can also take advantage of our ample outdoor seating, which provides stunning views of Selfridges and the charming piazza. So, whether you're looking to relax with a coffee, savor a delicious meal, or simply enjoy a sweet treat from our daily menu, Kula welcomes you to come, take a seat, and unwind in style.</p>
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
margin: 100px 100px 20px;

@media screen and (max-width:768px){
    margin:100px 20px 20px;
}
`;


const AboutHeader = styled.h1`
color: #000;
font-size: 30px;
text-transform:uppercase;
font-family: 'Open Sans', sans-serif;
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
margin:20px 0 50px 0;

&:hover{
    transition: all 0.2 ease-in-out;
    background: #fff;
    color: #010606;
    
}
`;