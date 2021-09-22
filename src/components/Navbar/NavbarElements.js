import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';


export const Nav = styled.nav`

background: #fff;
height: 80px;
margin-top: -80px;
display: flex;
justify-content: center;
align-items: center;
font-size: 1rem;
position: sticky;
top:0;
z-index: 10;

@media screen and (max-width:960px){
    transition: 0.8s all ease;
    background: #000;
}
`;

export const NavbarContainer = styled.div`
display: flex;
justify-content: space-between;
height: 80px;
z-index: 1;
width: 100%;
padding: 0 24px;
max-width:1100px;
`;

export const NavLogo = styled(LinkR)`
color: #000;
justify-self:flex-start;
cursor: pointer;
font-size: 1.5rem;
display:flex;
align-items: center;
margin-left: 24px;
font-weight:bold;
text-decoration: none;

@media screen and (max-width:960px){
    color: #fff;
}


`;

export const MobileIcon = styled.div`

display: none;
@media screen and (max-width: 960px){
    display:block;
    position: absolute;
    top:0;
    right:0;
    transform: translate(-100%,60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
    

}

`;

export const NavMenu = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align:center;
margin-right: -22px;


@media screen and (max-width: 960px){
    display: none;
}
`;

export const NavItem = styled.li`
height:80px;



`;

export const NavLinks = styled(LinkS)`
align-items: center;
display: flex;
flex-flow: row nowrap;
height: 100%;
justify-content: flex-end;
margin: 0px;
padding: 0px;
position: relative;
margin-right:auto;
margin-left:25px;




    
    span{
        color: #000;
        font-size: 13px;
        letter-spacing: 1.42px;
        line-height: 1.08;
        padding:2px 0px;
        white-space:nowrap;
        position: relative;
        cursor: pointer;
    
&:before{
    background-color: #000;
    border-radius:0px 0px 4px 4px;
    bottom: -6px;
    content:'';
    height:2px;
    left:0px;
    opacity: 0;
    position: absolute;
    right:0px;
    transform-origin: left center;
    transform: scaleX(0);
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    visibility: hidden;
    width: auto;
}

}
&:hover {
    span:before {
        transform:scaleX(1);
        visibility:visible;
        opacity:1 !important;
    
    
    }
}
`;

export const MenuLink = styled(LinkS)`

align-items: center;
display: flex;
flex-flow: row nowrap;
height: 100%;
justify-content: flex-end;
margin: 0px;
padding: 0px;
position: relative;
margin-right:auto;
margin-left:25px;
text-decoration: none;



    
    span{
        color: #000;
        font-size: 13px;
        letter-spacing: 1.42px;
        line-height: 1.08;
        padding:2px 0px;
        white-space:nowrap;
        position: relative;
        cursor: pointer;
    
&:before{
    background-color: #000;
    border-radius:0px 0px 4px 4px;
    bottom: -6px;
    content:'';
    height:2px;
    left:0px;
    opacity: 0;
    position: absolute;
    right:0px;
    transform-origin: left center;
    transform: scaleX(0);
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    visibility: hidden;
    width: auto;
}

}
&:hover {
    span:before {
        transform:scaleX(1);
        visibility:visible;
        opacity:1 !important;
    
    
    }
}
`;




export const NavBtn = styled.nav`
display: flex;
align-items: center;

@media screen and (max-width: 768px){
    display:none;
}
`;

export const NavBtnLink = styled(LinkR)`
border-radius: 50px;
background: #01bf71;
white-space: nowrap;
padding: 10px 22px;
color: #010606;
font-size: 16px;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;

&:hover{
    transition: all 0.2 ease-in-out;
    background: #fff;
    color: #010606;
    
}

@media screen and (max-width: 960px){
  display:none;
}
`;