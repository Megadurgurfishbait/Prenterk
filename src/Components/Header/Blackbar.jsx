import React from 'react';
import styled from 'styled-components';
import Logo from '../../Assets/Header/Capture.JPG';

const Blackbar = (props) => (
    <BlackHeader>
        <LeftText>
            <li> Vörur </li>
            <li> Um okkur </li> 
        </LeftText>
        <MidText>
            <MidTextImage />
        </MidText>
        <RightText>
              {console.log(props.myClick)}
            <button onClick={props.myClick}> Hafa samband </button>
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
    
    & li {
      color: white;
      display: flex;
      align-items: center;
      text-transform: uppercase;
      list-style: none;
      font-size: 1.2rem;
      height: 100%;
      cursor: pointer;
    }
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


const RightText = styled.div`
    display: flex;
    flex: 1 1 25%;
    justify-content: flex-end;
    align-items: center;
    color: white;
    background-color: ${props => props.theme.main};

    & > button {
      border: none;
      height: 100%;
      text-transform: uppercase;
      background-color: ${props => props.theme.main};
      color: white;
      font-size: 1.3rem;
      margin-right: 2rem;
      padding: 0px; 
      cursor: pointer;
      z-index: 400;
    }
`;