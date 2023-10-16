import React, { useState } from 'react';
import styled from 'styled-components';
import MenuButton from '../components/Menu/MenuButton';
import menuBg from '../images/pasta2.jpg';
import { MenuStarter,MenuMain, MenuDessert } from '../components/Menu/menuData';

const Menu = (props) => {
    const [starterActive, setStarterActive] = useState(true);
    const [mainActive, setMainActive] = useState(false);
    const [dessertActive, setDessertActive] = useState(false);
    const [activeValue, setActiveValue] = useState(MenuStarter);


    function activateStarter() {
        setStarterActive(true);
        setMainActive(false);
        setDessertActive(false);
        setActiveValue(MenuStarter);

    }

    const activateMain = () => {
        setMainActive(true);
        setStarterActive(false);
        setDessertActive(false);
        setActiveValue(MenuMain);
    }

    function activateDessert() {
        setDessertActive(true);
        setStarterActive(false);
        setMainActive(false);
        setActiveValue(MenuDessert);
    }
    var BgColorMain = {};
    var BgColorStarter = {};
    var BgColorDessert = {};

    if (starterActive) { BgColorStarter = { backgroundColor: 'rgb(1, 191, 113)', color: 'white' }; BgColorMain = { backgroundColor: '' }; BgColorDessert = { backgroundColor: '' } }
    else if (mainActive) { BgColorMain = { backgroundColor: 'rgb(1, 191, 113)',color: 'white' }; BgColorStarter = { backgroundColor: '' }; BgColorDessert = { backgroundColor: '' } }
    else if (dessertActive) { BgColorDessert = { backgroundColor: 'rgb(1, 191, 113)',color: 'white' }; BgColorStarter = { backgroundColor: '' }; BgColorMain = { backgroundColor: '' } }

    return (
        <>
            <MenuDiv id='menu'>
                <BannerImg>
                <Image/>
                    <Box>
                        <HeaderHolder>
                            <Title>Our Menu</Title>
                        </HeaderHolder>
                    </Box>
                </BannerImg>
                <MenuWrapper>
                    <ButtonsWrapper>
                        <MenuButton active={BgColorStarter} func={activateStarter} name={'starter'}></MenuButton>
                        <MenuButton active={BgColorMain} func={activateMain} name={'main'}></MenuButton>
                        <MenuButton active={BgColorDessert} func={activateDessert} name={'dessert'}></MenuButton>
                    </ButtonsWrapper>
                    <MenuItemWrapper>

                        {activeValue.map((data) => (
                            <MenuItemDiv key={data.id}>
                                <MenuItem >
                                    <ItemHeader>{data.itemName}</ItemHeader>
                                    <ItemDots />
                                    <ItemPrice>£{data.itemPrice}</ItemPrice>
                                </MenuItem><ItemDescription>{data.itemDescription}</ItemDescription>
                            </MenuItemDiv>
                        ))}
                    </MenuItemWrapper>
                </MenuWrapper>
            </MenuDiv>
        </>
    )
}

export default Menu;

const BannerImg = styled.div`
    width:100%;
    height:400px;
    ${'' /* background-image: url(${menuBg}); */}
    ${'' /* filter: blur(8px);
    -webkit-filter: blur(3px); */}
    ${'' /* background-size: cover;
    object-fit: cover; */}
    ${'' /* box-shadow: 2px 2px #000; */}
    margin:0 10px;
    display: flex;
    align-items: center;
    position: relative;

    @media screen and (max-width: 1000px){
        margin:0;
    }
`;

const Image=styled.div`
    width:100%;
    background-image: url(${menuBg});
    filter: blur(2px);
    -webkit-filter: blur(2px);
    height: 100%; 
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  `
  
const Box = styled.div`
  width: 100%;
  height: 400px;
  background: rgba(0,0,0,0.5);
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  text-transform:uppercase;
`;

const MenuDiv = styled.div`
    width: 100vw;
    /* background-image:url(${menuBg}); */
    background-color: #fff;
    background-size: cover;
    object-fit: cover;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 1000px){
    
    }
`;

const MenuWrapper = styled.div`
    width:90%;
    height:100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin:20px;
    font-family: 'Open Sans', sans-serif;
    
    @media screen and (max-width:1200px){
        width:100%;
        padding:10px;
    }
`;

const HeaderHolder = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    width:100%;
    margin:0px 0 50px;
`;

const Title= styled.h2`
    color: white;
    font-size: 32px;
    margin: 0;
    transform: translate(-50%,-50%);
    text-align: center;
    position: absolute;
    font-weight:normal;
    top: 50%;
    left: 50%;
    font: 60px;
`

const ButtonsWrapper = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin:20px 0;
`;



const MenuItemDiv = styled.div`
    display:flex;
    flex-direction: column;
`;


const MenuItemWrapper = styled.div`
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    width: 80%;
    ${'' /* grid-template-columns:50% 50% ;
    grid-column-gap: 5%; */}
    justify-content: space-between;
    align-items: space-between;

    @media screen and (max-width:1200px){
        display:flex;
        flex-direction: column;
    }
`;
const MenuItem = styled.div`
    display:flex;
    align-items: baseline;
    font-family: 'Open Sans', sans-serif;
`;

const ItemHeader = styled.div`
    font-size: 22px;
    text-transform:uppercase;
    color: rgb(1, 191, 113);
    ${'' /* letter-spacing: 2px; */}
    margin: 0 0 10px;
`;

const ItemDots = styled.span`
    flex: 1;
    border-bottom: 1px dashed #aaa;
    margin: 0 15px;
`;

const ItemPrice = styled.span`
    color: rgb(1, 191, 113) ;
`;

const ItemDescription = styled.p`
    margin-bottom: 40px;
    max-width: 100%;
    color:#000;
`;