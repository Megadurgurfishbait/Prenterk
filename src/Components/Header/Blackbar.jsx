import React from 'react';
import styled from 'styled-components';
import Logo from '../../Assets/Header/Capture.JPG';
import Breakpoints from '../Elements/breakpoints';
import DrawerToggleButton from '../SideDrawer/DrawerToggle';

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
      <Burger>
            <DrawerToggleButton click={props.drawerClickHandler}/>
      </Burger>
    </BlackHeader>
);

export default Blackbar;

const Burger = styled.div`
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
            margin-right: 2rem;
            @media (min-width: ${Breakpoints.portrait}px){
                  display: none;
            }
`;

const BlackHeader = styled.div`
    display: flex;
    position: fixed;
    background-color: ${props => props.theme.main};
    height: 85px;
    width: 100vw;
    z-index: 500;
`;

const LeftText = styled.ul`
    background-color: ${props => props.theme.main};
    display: flex;
    flex: 1 1 25%;
    align-items: center;
    justify-content: flex-end;
    align-content: center;
    z-index: 50;
    
    @media (max-width: ${Breakpoints.portrait}px){
            display: none;
      }
`;

const MidText = styled.div`
    display: flex;
    flex: 1 1 10%;
    justify-content: center;
    align-items: center;
    ${props => props.theme.main}


`;

const MidTextImage = styled.div`
    height: 100%;
    width: 100%;
    margin-top: -2px;
    background-image: url(${Logo}) ;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;

      @media (max-width: ${Breakpoints.portrait}px){
            background-position: left;
      }
`;


const RightText = styled.ul`
    display: flex;
    flex: 1 1 25%;
    justify-content: flex-start;
    align-items: center;
    color: white;
    background-color: ${props => props.theme.main};

      @media (max-width: ${Breakpoints.portrait}px){
            display: none;
      }

`;

const Button = styled.button`
      border: none;
      height: 60%;
      background-color: ${props => props.theme.main};
      color: white;
      font-size: 1.3rem;
      margin-right: 2rem;
      padding: 0px; 
      cursor: pointer;
      z-index: 400;
      border-bottom: 1px solid transparent;
      transition: all .5s ease;
      white-space: nowrap;
      letter-spacing: 3px;
      &:hover,
      &:active,
      &:focus {
      border-bottom: 1px solid white;
      outline: none;
      }
      `;
