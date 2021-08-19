
import { HeroContainer, HeroBg, } from './HeroElements';


import ImgSlider from '../ImgSlider';
import Insta from '../instagram';


const HeroSection = () => {



    return (
        <HeroContainer id='home'>
            <HeroBg>

                <ImgSlider />
                <Insta />
            </HeroBg>

        </HeroContainer>
    )
}

export default HeroSection
