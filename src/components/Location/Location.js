import React from 'react';
import styled from 'styled-components';

const Location = () => {
    return (
        <>
            <LocationDiv id="contact">
                <LocationWrapper>
                    <MapDiv>


                        <iframe id="gmap_canvas" title='Gmap_canvas'
                            src="https://maps.google.com/maps?q=Japan,%20%E3%80%92101-0025%20Tokyo,%20Chiyoda%20City,%20Kanda%20Sakumacho,%201%20Chome%E2%88%926-1&t=&z=13&ie=UTF8&iwloc=&output=embed" ></iframe>


                    </MapDiv>
                    <AddressDiv>
                        <h1>Seventh Heaven</h1>
                        <h3>Sector Seven , Midgar FFVII 1997</h3>
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