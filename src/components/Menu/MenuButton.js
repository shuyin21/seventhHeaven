import React from 'react';
import styled from 'styled-components';

const MenuButton = (props) => {




    return (
        <>
            <MButton style={props.active} onClick={props.isActive} onClick={props.func}>{props.name}</MButton>
        </>
    )
}

export default MenuButton


const MButton = styled.button`
margin: 50px 15px;
  padding: 10px 20px;
  border: 1px solid #ffc600;
  border-radius: 3px;
  color: #000;
  font-weight: bold;
  text-decoration: none;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
 
`;