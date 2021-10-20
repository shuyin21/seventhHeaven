import React from 'react'
import InstagramFeed from 'react-ig-feed';
import 'react-ig-feed/dist/index.css';
import styled from 'styled-components';

const Instagram = () => {
    return (
        <>
            <InstaDiv >
                <InstaWrapper>
                    <InstagramFeed token={"IGQVJWbm1FdXhYb3NKZAUFDTVVVcTFrMUk3eW9FOVd6SlZAlX3YyelBZAcmN0ek5SSWwtY3FSbXMtbGJYRy1feUptRzBETUxhWFVQYTc3bzdEaE9yUWhjU1luYU9sRHVlXzduRFNYSUdXLWtoU3pZAaTVHMQZDZD"} counter="3" />
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