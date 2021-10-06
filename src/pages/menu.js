import React, { useState } from 'react';
import styled from 'styled-components';
import MenuButton from '../components/Menu/MenuButton';

import menuBg from '../images/pasta.jpg';
import { MenuData1, MenuData2, MenuData3, MenuData4, MenuData5, MenuData6, MenuData7, MenuData8, MenuData9, MenuData10, MenuData11, MenuData12 } from '../components/Menu/menuData';

const Data = [MenuData1, MenuData2, MenuData3, MenuData4, MenuData5, MenuData6, MenuData7, MenuData8, MenuData9, MenuData10, MenuData11, MenuData12];
const Menu = (props) => {

    const [starterActive, setStarterActive] = useState(true);
    const [mainActive, setMainActive] = useState(false);
    const [dessertActive, setDessertActive] = useState(false);
    const [activeValue, setActiveValue] = useState('starter');

    console.log(activeValue);
    function activateStarter() {
        setStarterActive(true);
        setMainActive(false);
        setDessertActive(false);
        setActiveValue('starter');

    }

    const activateMain = () => {
        setMainActive(true);
        setStarterActive(false);
        setDessertActive(false);
        setActiveValue('main');
    }

    function activateDessert() {
        setDessertActive(true);
        setStarterActive(false);
        setMainActive(false);
        setActiveValue('dessert');
    }
    var BgColorMain = {};
    var BgColorStarter = {};
    var BgColorDessert = {};

    if (starterActive) { BgColorStarter = { backgroundColor: '#ffc600' }; BgColorMain = { backgroundColor: '' }; BgColorDessert = { backgroundColor: '' } }
    else if (mainActive) { BgColorMain = { backgroundColor: '#ffc600' }; BgColorStarter = { backgroundColor: '' }; BgColorDessert = { backgroundColor: '' } }
    else if (dessertActive) { BgColorDessert = { backgroundColor: '#ffc600' }; BgColorStarter = { backgroundColor: '' }; BgColorMain = { backgroundColor: '' } }


    // { starterActive ? BgColorStarter = { backgroundColor: '#ffc600' } : BgColorStarter = { backgroundColor: '' } }
    // { mainActive ? BgColorMain = { backgroundColor: '#ffc600' } : BgColorMain = { backgroundColor: '' } }
    // { dessertActive ? BgColorDessert = { backgroundColor: '#ffc600' } : BgColorDessert = { backgroundColor: '' } }




    return (
        <>

            <MenuDiv id='menu'>
                <BannerImg>
                    <Box>
                        <HeaderHolder>
                            <h2>Our Menu</h2>
                        </HeaderHolder>
                    </Box>


                </BannerImg>
                <MenuWrapper>


                    <ButtonsWrapper>
                        <MenuButton active={BgColorStarter} func={activateStarter} name={'starter'}></MenuButton>


                        <MenuButton active={BgColorMain} func={activateMain} name={'mains'}></MenuButton>
                        <MenuButton active={BgColorDessert} func={activateDessert} name={'dessert'}></MenuButton>
                    </ButtonsWrapper>

                    <MenuItemWrapper>

                        {Data.filter(x => x.menus === activeValue).map((data) => (
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
width:95vw;
height:400px;
background-image: url(${menuBg});
background-size: cover;
object-fit: cover;
box-shadow: 2px 2px #000;
margin:0 10px;
display: flex;
align-items: center;
position: relative;

@media screen and (max-width: 1000px){
    margin:0;
}
`;
const Box = styled.div`
width: 95vw;
  height: 400px;
  background: rgba(0,0,0,0.5);
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
 
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
width:60%;
height:100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin:20px;
 


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


h2 {
  
    color: white;
  font-size: 32px;
  margin: 0;
  transform: translate(-50%,-50%);
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  text-shadow: 1px 1px #000;
  font: 60px cookie, cursive;
}

`;

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
display:grid;
width: 100%;
grid-template-columns:50% 50% ;

grid-column-gap: 5%;
justify-content: space-between;
align-items: space-between;

@media screen and (max-width:1200px){
    display:flex;
    flex-direction: column;
}



`;
const MenuItem = styled.div`
display:flex;
max-width: 80%;
align-items: baseline;


`;

const ItemHeader = styled.h3`
font: 25px cookie, cursive;
    color: #ffc600;
    letter-spacing: 2px;
    margin: 0 0 10px;

`;

const ItemDots = styled.span`
flex: 1;
    border-bottom: 1px dashed #aaa;
    margin: 0 15px;

`;

const ItemPrice = styled.span`
color: #ffc600;
    font: 20px cookie, cursive;

`;

const ItemDescription = styled.p`
margin-bottom: 40px;
max-width: 70%;
color:#000;



`;