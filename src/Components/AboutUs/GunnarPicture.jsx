import React from 'react';
import styled from 'styled-components';
import Image from '../../Assets/AboutUs/prufael.JPG';

const GunnarPicture = () => (

      <Container />

)
export default GunnarPicture;


const Container = styled.div`
      display: flex;
      background-image: url(${Image});
      background-size: cover;
      background-repeat: no-repeat;
      height: 100%;
      flex: 1 1 50%;
      border-left: 4px solid white;

      &:hover {
            position: absolute;
            margin-left: auto;
            margin-right: auto;
            top:0;
            left: 0;
            right: 0;
            height: 100%;
            width: 100%;
            text-align: center;
            justify-content: center;
            align-items: center;
      }
`;