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
      position:absolute;
      top: -75px;
      right: -75px;
      min-height: 300px;
      min-width: 300px;
      max-height: 300px;
      max-width: 300px;
      border-radius: 100%;
`;