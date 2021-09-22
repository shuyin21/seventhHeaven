import React from 'react'
import styled from 'styled-components';


const Card = ({ headerTitle, personName, img, review }) => {
    return (
        <>
            <CardDiv>
                <CardHeaderDiv>
                    <CardTitleWrapper>
                        <h1>{headerTitle}</h1>
                        <h3>{personName}</h3>
                    </CardTitleWrapper>
                    <CardImg img={img} />
                </CardHeaderDiv>
                <CardP>{review}
                </CardP>
            </CardDiv>
        </>
    )
}

export default Card


const CardDiv = styled.div`
width:30% ;
min-height: 300px;
border:1px solid;
background-color: #060816;
border-color: #efebdf;
border-radius: 5px;
display: flex;
flex-direction: column;
justify-content: space-between;

padding: 50px;

@media screen and (max-width: 1450px){
    padding: 30px;
}
@media screen and (max-width:1000px){
    width:70%;
    padding: 30px;
    margin-bottom: 20px;
}
@media screen and (max-width:768px){
    width:90%;
    
}
`;

const CardHeaderDiv = styled.div`
display: flex;
justify-content: space-between;
align-items: space-between;



h1{
    color: #fff;
    font-size:22px ;
    max-width: 200px;
}
h3{
    color: #8e2427;
    font-size: 14px;
    margin-top: 10px;
}


/* @media screen and (max-width: 1200px){
    flex-direction: column-reverse;
} */
`;

const CardTitleWrapper = styled.div`
display: flex;
flex-direction: column;


`;

const CardImg = styled.div`
width: 100px;
height:100px;
background-image: url(${props => props.img});
background-size: cover;
border-radius:50%;


@media screen and (max-width:1200px){
    width: 70px;
    height:70px;
}
`;

const CardP = styled.p`
color: #ffffffb0;
font-weight:600;
margin-top: 30px;
line-height: 1.8;

`;