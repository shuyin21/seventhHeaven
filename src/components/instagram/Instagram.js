import React from 'react'
import InstagramFeed from 'react-ig-feed';
import 'react-ig-feed/dist/index.css';
import styled from 'styled-components';

const Instagram = () => {
    return (
        <>
            <InstaDiv >
                <InstaWrapper>
                    <InstagramFeed token={"IGQVJVTWhrVl9qSUlvZA2NIa29iQnNMZADZAqOFA4WFpOeFVqbUIyN2dQZA3A0aXZASSWFwNjRhV3JZAOWM4TllmTkgwX3A2VTJBeVI4eHJ3ZADcwUmN5dERXRUpaNDltOUFXaGdyaEZAWUlUxRGdZAX3V1Y3BYTgZDZD"} counter="3" />
                </InstaWrapper>
            </InstaDiv>
        </>
    )
}

export default Instagram



const InstaDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: #fff;


`;

const InstaWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin:20px 50px;
`;