import React from 'react'
import InstagramFeed from 'react-ig-feed';
import 'react-ig-feed/dist/index.css';
import styled from 'styled-components';

const Instagram = () => {
    return (
        <>
            <InstaDiv >
                <InstaWrapper>
                    <InstagramFeed token={"IGQVJValk2VFRJS2V1a2RnRmQ3elloN2tfVEltcGwyTE9ySWdvVnVBel9SUTFKMlRPV1dtcHJ6MkdvSGVndXpaUFJSbUpVWTkxYUxydEttU1VFRFF5VGxfVkFIWjR0aERrd1RNUTdJekZAJMWl4SWlnRgZDZD"} counter="3" />
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