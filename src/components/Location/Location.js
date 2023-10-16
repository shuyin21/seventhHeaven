import React from 'react';
import styled from 'styled-components';

const Location = () => {
    return (
        <>
            <LocationDiv id="contact">
                <LocationWrapper>
                    <MapDiv>
                        <iframe id="gmap_canvas" title='Gmap_canvas'
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.176560662846!2d-0.1375449229649086!3d51.50997671051463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604d3e5fb12a3%3A0xc8163443f43d800f!2s1%20Piccadilly%20Circus%2C%20London%20W1J%200DA!5e0!3m2!1sen!2suk!4v1697454454709!5m2!1sen!2suk" ></iframe>
                    </MapDiv>
                    <AddressDiv>
                        <h1>Seventh Heaven</h1>
                        <h3> 1 Piccadilly Circus</h3>
                        <h3>Mon-Sun:<br /> 9am-11pm</h3>
                        <h1>020785456455</h1>
                    </AddressDiv>
                </LocationWrapper>
            </LocationDiv>
        </>
    )
}

export default Location

const LocationDiv = styled.div`
    min-height: 700px;
    margin: 0;
    padding: 5% 15%;
    background-color: #fff;


    @media screen and (max-width:1500px){
        padding: 5% 2%;
    }
    `;

const LocationWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width:1000px){
        flex-direction: column;
    }
`;

const MapDiv = styled.div`
    min-width: 70%;
    height:500px;
    filter: grayscale(100%);

    iframe{
        height:100%;
        width:100%
    }

    @media screen and (max-width:1000px){
        max-width: 100%;
        width:100%;
    }
`;

const AddressDiv = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    padding: 5%;
    background-color: #f9f9f9;
    height:400px;
    max-width: 300px;

    @media screen and (max-width:1000px){
        max-width: 100%;
        width:100%;
    }

    h1{
        margin:20px 0;
        font-size: 24px;
        color: #222222;
    }

    h3{
        font-weight: 400;
        font-size: 17px;
        color: #4a4a4a;
        margin: 20px 0;
    }
`;