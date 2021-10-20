import React from 'react'
import styled from 'styled-components';
import BackG from '../../images/testimonials-bg.jpg';
import Card from './Card.js';
import { testimonialsOne, testimonialsTwo, testimonialsThree } from './TestimonialsData';


const Testimonials = () => {
    return (
        <>
            <TDiv >
                <TWrapper>
                    <TitleWrapper>
                        <h1>Take their word for it</h1>
                    </TitleWrapper>
                    <Card {...testimonialsOne} />
                    <Card {...testimonialsTwo} />
                    <Card {...testimonialsThree} />

                </TWrapper>
            </TDiv>
        </>
    )
}

export default Testimonials



const TDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;
min-height: 800px;
background-image: linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)) , url(${BackG});
background-size: cover;
`;

const TWrapper = styled.div`
display: flex;
padding: 50px;
justify-content: flex-end;
align-items: center;
@media screen and (max-width:1000px){
    flex-direction: column;
    padding:20px 0;
    justify-content: center;
}

`;

const TitleWrapper = styled.div`
width: 30%;
height:50vh;
margin-right: 50px;
text-align: center;

@media screen and (max-width:1000px){
    width:70%;
    margin-right: 0;
    height:20vh;
}


@media screen and (max-width:768px){
    width:90vw;
    margin-right: 0;
    height:10vh;
}

h1{
    background-color: #D0A37C;
    color:#fff;
    font-weight: 200;
    font-size: 38px;
}

`;