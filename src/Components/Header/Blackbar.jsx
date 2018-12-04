import React from 'react';
import styled from 'styled-components';
import Logo from '../../Assets/Header/Capture.JPG';

const Blackbar = (props) => (
    <BlackHeader>
        <LeftText>
            <Button id="vorur" onClick={props.button}> Vörur </Button>
            <Button id="umOkkur" onClick={props.button}> Um okkur </Button>
        </LeftText>
        <MidText>
            <MidTextImage />
        </MidText>
        <RightText>
            <Button onClick={props.myClick}> Hafa samband </Button>
        </RightText>
    </BlackHeader>
);

export default Blackbar;

const BlackHeader = styled.div`
    display: flex;
    background-color: ${props => props.theme.main};
    height: 5rem;
    width: 100vw;
`;

const LeftText = styled.ul`
    background-color: ${props => props.theme.main};
    display: flex;
    flex: 1 1 25%;
    align-items: center;
    justify-content: space-around;
    align-content: center;
    z-index: 50;
    

`;

const MidText = styled.div`
    display: flex;
    flex: 1 1 50%;
    justify-content: center;
    align-items: center;
    ${props => props.theme.main}
`;

const MidTextImage = styled.div`
    height: 100%;
    width: 100%;
    margin-top: -2px;
    background-image: url(${Logo});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
`;


const RightText = styled.ul`
    display: flex;
    flex: 1 1 25%;
    justify-content: center;
    align-items: center;
    color: white;
    background-color: ${props => props.theme.main};

`;

const Button = styled.button`
      border: none;
      height: 60%;
      text-transform: uppercase;
      background-color: ${props => props.theme.main};
      color: white;
      font-size: 1.3rem;
      margin-right: 2rem;
      padding: 0px; 
      cursor: pointer;
      z-index: 400;
      border-bottom: 1px solid transparent;
      transition: all .5s ease;
      
      &:hover,
      &:active,
      &:focus {
      border-bottom: 1px solid white;
      outline: none;
      }
      `;
