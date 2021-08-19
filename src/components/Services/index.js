import React from 'react'
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './ServicesElements'
import Icon1 from '../../images/acting.jpg';
import Icon2 from '../../images/singing.jpg';
import Icon3 from '../../images/dancing.jpg';

const Services = () => {
    return (
        <>
            <ServicesContainer id='services'>
                <ServicesH1>Our Services</ServicesH1>
                <ServicesWrapper>
                    <ServicesCard>
                        <ServicesIcon src={Icon1} />
                        <ServicesH2>Acting</ServicesH2>
                        <ServicesP><br />Perform in plays, competitions and musicals. </ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon2} />
                        <ServicesH2>Singing</ServicesH2>
                        <ServicesP>Sing at local events, talent contests and on the stages of large scale theatres.</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon3} />
                        <ServicesH2>Dancing</ServicesH2>
                        <ServicesP>Dance like nobody is watching. Perform in musicals, gala's and events. </ServicesP>
                    </ServicesCard>
                </ServicesWrapper>

            </ServicesContainer>
        </>
    )
}

export default Services
