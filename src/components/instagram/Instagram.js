import React from 'react'
import InstagramFeed from 'react-ig-feed';
import 'react-ig-feed/dist/index.css';
import styled from 'styled-components';

const Instagram = () => {
    return (
        <>
            <InstaDiv >
                <InstaWrapper>
                    <InstagramFeed token={"IGQVJXQWo3dU1pMk1Pa3k1WjJNZAnpfTUtsX3p6ZAHFldHlzV2wzZAlY0X2hxbUFtanh6c2ljUEktT0N0R0pYVmE0Tkp2WS1BZAVN6QWFOWjlGSTg0dzhpa0lhdmJ0MG1rREZAnWHNMcG5DQ25wQ0VSNU5YZAgZDZD"} counter="6" />
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